import { type AxiosResponseError } from 'src/types/apiError';

function isUnauthorizedError(error: AxiosResponseError<unknown>) {
  const { status } = error;
  return status === 401;
}

function handleError(error: AxiosResponseError<unknown>) {
  const errorCode = error.status;
  const errorMessage = error.data.error_message;

  if (errorMessage) {
    console.log('Show: ', errorMessage);
    return;
  }
  switch (errorCode) {
    case 504:
      console.log('504');
      break;
    case 500:
      console.log('500');
      break;
    case 404:
      console.log('404');
      break;
    case 403:
      console.log('403');
      break;
    case 401:
      console.log('401');
      break;
    default:
      break;
  }
}

export { handleError, isUnauthorizedError };
