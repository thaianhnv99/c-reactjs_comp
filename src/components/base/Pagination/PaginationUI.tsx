import { type SyntheticEvent, useState } from 'react';

type PageType = 'page' | 'first' | 'last' | 'next' | 'previous' | 'start-ellipsis' | 'end-ellipsis';

type PaginationUIProps = {
  count?: number;
  disabled?: boolean;
  defaultPage?: number;
  hideNextButton?: boolean;
  hidePrevButton?: boolean;
  // showFirstButton: boolean,
  // showLastButton: boolean,
};

const PaginationUI = ({
  count = 10,
  // defaultPage = 1,
  disabled = false,
  hideNextButton = false,
  hidePrevButton = false,
  // showFirstButton = false,
  // showLastButton = false,
}: PaginationUIProps) => {
  const [page, setPage] = useState<number | null>(1);
  const range = (start: number, end: number) => {
    const length = end - start + 1;
    return Array.from(
      {
        length,
      },
      (_, i) => start + i
    );
  };

  const buttonPage = (type: PageType) => {
    if (!page) return null;
    switch (type) {
      case 'previous':
        return page - 1;
      case 'next':
        return page + 1;
      default:
        return null;
    }
  };

  const handleClick = (event: SyntheticEvent<Element, Event>, value: number | null) => {
    event.preventDefault();
    if (!value) return;
    setPage(value);
  };

  const siblingCount = 1;
  const boundaryCount = 1;

  const startPages = range(1, Math.min(boundaryCount, count));
  const endPages = range(Math.max(count - boundaryCount + 1, boundaryCount + 1), count);
  const siblingsStart = Math.max(
    Math.min(
      // Natural start
      (page || 0) - siblingCount,
      // Lower boundary when page is high
      count - boundaryCount - siblingCount * 2 - 1
    ),
    // Greater than startPages
    boundaryCount + 2
  );
  const siblingsEnd = Math.min(
    Math.max(
      // Natural end
      (page || 0) + siblingCount,
      // Upper boundary when page is low
      boundaryCount + siblingCount * 2 + 2
    ),
    // Less than endPages
    endPages.length > 0 ? endPages[0] - 2 : count - 1
  );

  const itemList = [
    ...(hidePrevButton ? [] : ['previous']),
    ...startPages,
    ...(siblingsStart > boundaryCount + 2
      ? ['start-ellipsis']
      : boundaryCount + 1 < count - boundaryCount
        ? [boundaryCount + 1]
        : []),
    ...range(siblingsStart, siblingsEnd),
    ...(siblingsEnd < count - boundaryCount - 1
      ? ['end-ellipsis']
      : count - boundaryCount > boundaryCount
        ? [count - boundaryCount]
        : []),
    ...endPages,
    ...(hideNextButton ? [] : ['next']),
  ] as (PageType | number)[];

  const itemListResult: {
    type: PageType;
    page: number | null;
    selected: boolean;
    disabled: boolean;
    onClick: React.ReactEventHandler;
  }[] = itemList.map((item) => {
    return typeof item === 'number'
      ? {
          type: 'page',
          page: item,
          selected: page === item,
          onClick: (event) => {
            handleClick(event, item);
          },
          disabled,
        }
      : {
          type: item,
          page: buttonPage(item),
          selected: false,
          onClick: (event) => {
            handleClick(event, buttonPage(item));
          },
          disabled: disabled || (item === 'next' ? (page || 0) >= count : page === 1),
        };
  });

  return (
    <div>
      {itemListResult.map((item, index) => {
        if (item.type === 'start-ellipsis' || item.type === 'end-ellipsis') {
          return '...';
        } else if (item.type === 'page') {
          return (
            <button
              key={`${item.page}-${index}`}
              style={{ color: item.selected ? 'red' : 'black' }}
              onClick={item.onClick}
              disabled={item.disabled}
            >
              {item.page}
            </button>
          );
        } else {
          return (
            <button
              key={`${item.page}-${index}`}
              style={{ color: item.disabled ? 'gray' : 'black' }}
              onClick={item.onClick}
              disabled={item.disabled}
            >
              {item.type}
            </button>
          );
        }
      })}
    </div>
  );
};

export default PaginationUI;
