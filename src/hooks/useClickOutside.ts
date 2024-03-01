import { type RefObject, useEffect } from 'react';

type Event = MouseEvent | TouchEvent;

export const useClickOutside = (
  refs: RefObject<Element>[],
  onOutsideClick: (event: Event) => void,
  isAddTouchStartEventListener?: boolean
) => {
  useEffect(() => {
    const handleOutsideClick = (event: Event) => {
      const isAllOutsideClicked = refs.every((ref) => {
        return event.target instanceof Node && ref.current && !ref.current.contains(event.target);
      });

      if (isAllOutsideClicked) {
        onOutsideClick(event);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    if (isAddTouchStartEventListener) {
      document.addEventListener('touchstart', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      if (isAddTouchStartEventListener) {
        document.removeEventListener('touchstart', handleOutsideClick);
      }
    };
  }, [isAddTouchStartEventListener, onOutsideClick, refs]);
};
