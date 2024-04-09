/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useLayoutEffect, useMemo } from 'react';

const useKeepScrollPosition = (deps: unknown[]) => {
  const containerRef = useRef<HTMLElement>(null);
  const previousScrollPosition = useRef(0);
  const container = containerRef?.current;

  useMemo(() => {
    if (container) {
      previousScrollPosition.current = container?.scrollHeight - container?.scrollTop;
    }
  }, [...deps]);

  useLayoutEffect(() => {
    if (container) {
      container.scrollTop = container?.scrollHeight - previousScrollPosition.current;
    }
  }, [...deps]);

  const scrollToBottom = (behavior?: ScrollBehavior) => {
    if (!container) return;
    container.scrollTo({
      top: container.scrollHeight,
      behavior,
    });
  };

  return { containerRef, scrollToBottom };
};

export default useKeepScrollPosition;
