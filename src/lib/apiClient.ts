import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosResponseHeaders,
  Method,
} from "axios";
// import { TFunction } from 'next-i18next';
import qs from "qs";
import { getAuthorizationHeader } from "./authorization";

function downloadAttachment(response: AxiosResponse, attachment: string) {
  const [, filename] = attachment.split("=");
  const fileLink = document.createElement("a");

  fileLink.href = window.URL.createObjectURL(new Blob([response.data]));
  fileLink.setAttribute("download", decodeURIComponent(filename));

  document.body.appendChild(fileLink);
  fileLink.click();

  document.body.removeChild(fileLink);
}

function getAttachment(responseHeaders: AxiosResponseHeaders) {
  const contentDisposition =
    responseHeaders && responseHeaders["content-disposition"];
  if (!contentDisposition) {
    return null;
  }

  const [matchedAttachedFile] = contentDisposition
    .split(";")
    .filter((str) => str.includes("filename"));
  return matchedAttachedFile;
}

export const setupAxios = () => {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_END_POINT,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    },
    paramsSerializer(params) {
      return qs.stringify(params, {
        arrayFormat: "comma",
        skipNulls: true,
        allowDots: true,
        filter: (prefix, value) =>
          value !== undefined && value !== null && value !== ""
            ? value
            : undefined,
      });
    },
  });

  // const axiosInterceptor = (store: ST, t: TFunction) => {
  //   instance.interceptors.response.use(
  //     function (response) {
  //       const attachment = getAttachment(response.headers);
  //       if (attachment) {
  //         downloadAttachment(response, attachment);
  //       }

  //       return response;
  //     },
  //     function ({ response }) {
  //       if (!response) {
  //         return Promise.reject({
  //           message: 'uncaught error',
  //         });
  //       }
  //       if (response.status === 401 || response.status === 403) {
  //         store.dispatch({ data: { displayAuthError: true }, type: '@COMMON/SET_DATA' });
  //         return Promise.reject({
  //           code: 'signOut',
  //           message: t('MESAGE_AUTH_EXPIRED_SHORT'),
  //         });
  //       }

  //       if (response.status === 404) {
  //         return Promise.reject({
  //           code: response.status,
  //           message: response.statusText,
  //         });
  //       }

  //       return Promise.reject(response.data);
  //     }
  //   );
  // };

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
        method: "get",
        url,
        options: {
          ...options,
          params,
        },
      }),
    post: <T>(url: string, data: any, options?: AxiosRequestConfig) =>
      fetch<T>({
        method: "post",
        url,
        options: {
          ...options,
          data,
        },
      }),
    patch: <T>(url: string, data: any, options?: AxiosRequestConfig) =>
      fetch<T>({
        method: "patch",
        url,
        options: {
          ...options,
          data,
        },
      }),
    put: <T>(url: string, data: any, options?: AxiosRequestConfig) =>
      fetch<T>({
        method: "put",
        url,
        options: {
          ...options,
          data,
        },
      }),
    delete: <T>(url: string, params?: any, options?: AxiosRequestConfig) =>
      fetch<T>({
        method: "delete",
        url,
        options: {
          ...options,
          params,
        },
      }),
  };

  return { apiClient };
};

export const { apiClient } = setupAxios();
