import Button from '@mui/material/Button';
import { _openPopup, store } from 'src/states';

const DEFAULT_TIMEOUT = 30 * 60 * 1000;
let timeoutId: ReturnType<typeof window.setTimeout> | undefined = undefined;

function initIdleTimer() {
  if (timeoutId) {
    return;
  }
  //Hiden popup notification expire token
  timeoutId = setTimeout(handleTimeout, DEFAULT_TIMEOUT);
}

function restartIdleTimer() {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  timeoutId = setTimeout(handleTimeout, DEFAULT_TIMEOUT);
}
function stopIdleTimer() {
  clearTimeout(timeoutId);
  timeoutId = undefined;
}

function handleTimeout() {
  console.log('Timeout finish');
  //Show popup notification expire
  store.dispatch(
    _openPopup({
      content: 'You have been logged out due to no input for 30 minutes.',
      button: <Button>Close</Button>,
    })
  );
  console.log('You have been logged out due to no input for 30 minutes.');
  stopIdleTimer();
}

export { initIdleTimer, restartIdleTimer, stopIdleTimer, handleTimeout };
