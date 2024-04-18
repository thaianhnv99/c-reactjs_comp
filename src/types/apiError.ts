import { type AxiosResponse } from 'axios';

export type ResponseDataError<T> = {
  error_code: number;
  error_message: string;
  error_data: T;
};

export type AxiosResponseError<T = unknown> = AxiosResponse<ResponseDataError<T>>;
