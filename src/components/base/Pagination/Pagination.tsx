import { useState } from 'react';

const pageInit = 1;
const pageSizeInit = 10;
const Pagination = () => {
  const [page, setPage] = useState(pageInit);
  const hasNextPage = page < pageSizeInit;

  const handleNext = () => {
    setPage(page + 1);
  };

  const handlePrevious = () => {
    setPage(page - 1);
  };

  type PageType = 'start-ellipsis' | 'end-ellipsis' | 'page';
  const checkType = (page: number): PageType => {
    if (page > 1 && page < 5) {
      return 'start-ellipsis';
    }
    if (page > 1 && page < pageSizeInit - 2) {
      return 'end-ellipsis';
    }
    return 'page';
  };

  const isStart = checkType(page - 3) === 'page' || checkType(page - 2) === 'page';
  // const isEnd = checkType(page - 3) === 'page' || checkType(page - 2) === 'page';
  return (
    <>
      <div>
        <button onClick={handlePrevious} disabled={page === 1}>
          Previous
        </button>
        {pageSizeInit - page < 1 && page - 4 > 0 && (
          <button onClick={() => setPage(page - 4)}>{page - 4}</button>
        )}
        {isStart ? (
          <>
            {pageSizeInit - page < 2 && page - 3 > 0 && (
              <button onClick={() => setPage(page - 3)}>{page - 3}</button>
            )}
            {page - 2 > 0 && <button onClick={() => setPage(page - 2)}>{page - 2}</button>}
          </>
        ) : (
          <>
            <button onClick={() => setPage(1)}>1</button>
            <span>...</span>
          </>
        )}

        {page - 1 > 0 && <button onClick={() => setPage(page - 1)}>{page - 1}</button>}
        {
          <button onClick={() => setPage(page)} style={{ color: 'red' }}>
            {page}
          </button>
        }
        {page + 1 <= pageSizeInit && <button onClick={() => setPage(page + 1)}>{page + 1}</button>}
        {page + 2 <= pageSizeInit && <button onClick={() => setPage(page + 2)}>{page + 2}</button>}
        {page + 3 <= pageSizeInit && page < 3 && (
          <button onClick={() => setPage(page + 3)}>{page + 3}</button>
        )}
        {page + 4 <= pageSizeInit && page < 2 && (
          <button onClick={() => setPage(page + 4)}>{page + 4}</button>
        )}
        <button onClick={handleNext} disabled={!hasNextPage}>
          Next
        </button>
      </div>
      <div>page: {page}</div>
    </>
  );
};

export default Pagination;
