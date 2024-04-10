import { useState, useRef, useEffect, type RefObject } from 'react';

type UseIntersectionObserverResult<T> = [React.RefObject<T>, IntersectionObserverEntry | null];

function useIntersectionObserver<T extends HTMLElement>(
  options?: Omit<IntersectionObserverInit, 'root'> & {
    root: RefObject<T>;
  }
): UseIntersectionObserverResult<T> {
  const { threshold = 1, root = null, rootMargin = '0px' } = options || {};
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setEntry(entry), {
      threshold,
      root: root?.current,
      rootMargin,
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [ref, root, rootMargin, threshold]);

  return [ref, entry];
}

export { useIntersectionObserver };
