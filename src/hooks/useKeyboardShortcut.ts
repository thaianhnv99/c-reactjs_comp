import { useEffect } from 'react';

type EventKeyBoard = 'keydown' | 'keyup';
type UseKeyPressProps = {
  key: string;
  onKeyPressed: () => void;
  options?: {
    event?: EventKeyBoard;
    eventOptions?: AddEventListenerOptions;
  };
};

export function useKeyPress({ key, onKeyPressed, options }: UseKeyPressProps) {
  const { event = 'keypress', eventOptions } = options || {};
  useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent) => {
      if (e.key === key) {
        e.preventDefault();
        onKeyPressed();
      }
    };

    document.addEventListener(event, keyDownHandler);
    return () => {
      document.removeEventListener(event, keyDownHandler, eventOptions);
    };
  }, [event, eventOptions, key, onKeyPressed]);
}
