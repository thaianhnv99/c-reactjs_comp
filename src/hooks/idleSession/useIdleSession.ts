import { useEffect } from 'react';
import { handleTimeout, initIdleTimer, restartIdleTimer, stopIdleTimer } from './idleSession';

export function useIdleSession() {
  useEffect(() => {
    initIdleTimer();
  }, []);

  return { restartIdleTimer, stopIdleTimer, handleTimeout };
}
