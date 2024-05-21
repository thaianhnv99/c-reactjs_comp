/* eslint-disable no-debugger */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { type AxiosRequestConfig, type AxiosResponse, type Method } from 'axios';
// import {type AxiosResponseHeaders} from 'axios';
import qs from 'qs';
import { getAuthorizationHeader } from './authorization';
import Cookies from 'js-cookie';
import { sleep } from 'src/shared/utils/util';
import refreshToken from './refreshToken';
import { handleError, isUnauthorizedError } from './handleApiClientError';
import { type AxiosResponseError } from 'src/types/apiError';

// function downloadAttachment(response: AxiosResponse, attachment: string) {
//   const [, filename] = attachment.split('=')
//   const fileLink = document.createElement('a')

//   fileLink.href = window.URL.createObjectURL(new Blob([response.data]))
//   fileLink.setAttribute('download', decodeURIComponent(filename))

//   document.body.appendChild(fileLink)
//   fileLink.click()

//   document.body.removeChild(fileLink)
// }

// function getAttachment(responseHeaders: AxiosResponseHeaders) {
//   const contentDisposition = responseHeaders && responseHeaders['content-disposition']
//   if (!contentDisposition) {
//     return null
//   }

//   const [matchedAttachedFile] = contentDisposition.split(';').filter((str) => str.includes('filename'))
//   return matchedAttachedFile
// }

let refreshingFn: ReturnType<typeof refreshToken> | undefined = undefined;

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_END_POINT,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
  },
  paramsSerializer(params) {
    return qs.stringify(params, {
      arrayFormat: 'comma',
      skipNulls: true,
      allowDots: true,
      filter: (prefix, value) =>
        value !== undefined && value !== null && value !== '' ? value : undefined,
    });
  },
});

instance.interceptors.request.use(
  async (config) => {
    const token = Cookies.get('Authentication');
    if (token) {
      config.headers = {
        ...config.headers,
        authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  async (response) => {
    await sleep(1000);
    return response;
  },
  async (error) => {
    const originalConfig = error?.config;
    const responseError = error?.response;

    console.log('config', responseError, originalConfig);

    if (!responseError) {
      return Promise.reject({
        message: 'uncaught error',
      });
    }

    if (isUnauthorizedError(responseError)) {
      console.log(isUnauthorizedError(responseError), responseError.data);
      try {
        if (!refreshingFn) {
          refreshingFn = refreshToken();
        }

        originalConfig.sent = true;
        const [token, refeshToken] = await refreshingFn;
        console.log('refeshToken', refeshToken);

        if (token) {
          originalConfig.headers = {
            ...originalConfig.headers,
            authorization: `Bearer ${token}`,
          };

          // localStorage.setItem("token", JSON.stringify(token));
          // localStorage.setItem("user", JSON.stringify(user));

          // retry original request
          try {
            return await axios.request(originalConfig);
          } catch (innerError) {
            console.log('error inner', innerError);
            // Bắt lỗi tại đây để nó không bắn lỗi catch ra ngoài nữa, tại đây mình có thể đưa về trang login (optional)
            // if original req failed with 401 again - it means server returned not valid token for refresh request
            if (isUnauthorizedError(innerError as AxiosResponseError<unknown>)) {
              throw innerError;
            }
            //  else {
            //   handleError(error);
            // }
          }
        }
      } catch (error) {
        console.log('error refesh');
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        // redirect to /login and clear token
      } finally {
        console.log('reset');
        refreshingFn = undefined;
      }
    } else {
      console.log('errrrr');
      handleError(error);
    }
    return Promise.reject(error);
  }
);

const fetch = async <T>({
  method,
  url,
  options,
}: {
  method: Method;
  url: string;
  options?: AxiosRequestConfig;
}) => {
  const response = (await instance({
    method,
    url,
    ...options,
    headers: { Authorization: getAuthorizationHeader() },
  })) as AxiosResponse<T>;

  return response;
};

const apiClient = {
  get: <T>(url: string, params?: any, options?: AxiosRequestConfig) =>
    fetch<T>({
      method: 'get',
      url,
      options: {
        ...options,
        params,
      },
    }),
  post: <T>(url: string, data: any, options?: AxiosRequestConfig) =>
    fetch<T>({
      method: 'post',
      url,
      options: {
        ...options,
        data,
      },
    }),
  patch: <T>(url: string, data: any, options?: AxiosRequestConfig) =>
    fetch<T>({
      method: 'patch',
      url,
      options: {
        ...options,
        data,
      },
    }),
  put: <T>(url: string, data: any, options?: AxiosRequestConfig) =>
    fetch<T>({
      method: 'put',
      url,
      options: {
        ...options,
        data,
      },
    }),
  delete: <T>(url: string, params?: any, options?: AxiosRequestConfig) =>
    fetch<T>({
      method: 'delete',
      url,
      options: {
        ...options,
        params,
      },
    }),
};
console.log('called');
export { apiClient };
