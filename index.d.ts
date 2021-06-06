import { Redirect } from 'follow-redirects';

export interface AxiosTransformer {
  (data: any, headers?: any): any;
}

export interface AxiosAdapter {
  (config: AxiosRequestConfig): AxiosPromise<any>;
}

export interface AxiosBasicCredentials {
  username: string;
  password: string;
}

export interface AxiosProxyConfig {
  host: string;
  port: number;
  auth?: {
    username: string;
    password:string;
  };
  protocol?: string;
}

export type Method =
  | 'get' | 'GET'
  | 'delete' | 'DELETE'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'
  | 'post' | 'POST'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH'
  | 'purge' | 'PURGE'
  | 'link' | 'LINK'
  | 'unlink' | 'UNLINK'

export type ResponseType =
  | 'arraybuffer'
  | 'blob'
  | 'document'
  | 'json'
  | 'text'
  | 'stream'

export interface TransitionalOptions{
  silentJSONParsing: boolean;
  forcedJSONParsing: boolean;
  clarifyTimeoutError: boolean;
}

export interface AxiosRequestConfig {
  url?: string;
  method?: Method;
  baseURL?: string;
  transformRequest?: AxiosTransformer | AxiosTransformer[];
  transformResponse?: AxiosTransformer | AxiosTransformer[];
  headers?: any;
  params?: any;
  paramsSerializer?: (params: any) => string;
  data?: any;
  timeout?: number;
  timeoutErrorMessage?: string;
  withCredentials?: boolean;
  adapter?: AxiosAdapter;
  auth?: AxiosBasicCredentials;
  responseType?: ResponseType;
  xsrfCookieName?: string;
  xsrfHeaderName?: string;
  onUploadProgress?: (progressEvent: any) => void;
  onDownloadProgress?: (progressEvent: any) => void;
  maxContentLength?: number;
  validateStatus?: ((status: number) => boolean) | null;
  maxBodyLength?: number;
  maxRedirects?: number;
  socketPath?: string | null;
  httpAgent?: any;
  httpsAgent?: any;
  proxy?: AxiosProxyConfig | false;
  cancelToken?: CancelToken;
  checkServerIdentity?: (host: string, cert: any) => { stack?: string; } | undefined;
  decompress?: boolean;
  <<<<<<< release/1.0.0-beta.1
  trackRedirects?: boolean;
}

export interface AxiosRedirect extends Redirect {
  =======
  transitional?: TransitionalOptions
  >>>>>>> master
}

export interface AxiosResponse<T = any>  {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  config: AxiosRequestConfig;
  request?: any;
  redirects?: AxiosRedirect[]
  responseUrl?: string
}


export type AxiosErrorToJSON = () => {
    message: string;
    name: string;
    stack: string;
    config: AxiosRequestConfig;
    code?: string;
};

export interface AxiosError extends Error {
  config: AxiosRequestConfig;
  code?: string;
  request?: any;
  response?: AxiosResponse;
  isAxiosError: boolean;
}

export class AxiosException extends Error implements AxiosError {
    config: AxiosRequestConfig;
    code?: string;
    request?: any;
    response?: AxiosResponse;
    isAxiosError: boolean;
    toJSON: AxiosErrorToJSON;
}

export interface AxiosPromise<T = any> extends Promise<AxiosResponse<T>> {
}

export interface CancelStatic {
  new (message?: string): Cancel;
}

export interface Cancel {
  message: string;
}

export interface Canceler {
  (message?: string): void;
}

export interface CancelTokenStatic {
  new (executor: (cancel: Canceler) => void): CancelToken;
  source(): CancelTokenSource;
}

export interface CancelToken {
  promise: Promise<Cancel>;
  reason?: Cancel;
  throwIfRequested(): void;
}

export interface CancelTokenSource {
  token: CancelToken;
  cancel: Canceler;
}

export interface AxiosInterceptorManager<V> {
  use<T = V>(onFulfilled?: (value: V) => T | Promise<T>, onRejected?: (error: any) => any): number;
  eject(id: number): void;
}

export interface AxiosInstance<C extends AxiosRequestConfig=AxiosRequestConfig> {
  (config: C): AxiosPromise;
  (url: string, config?: C): AxiosPromise;
  defaults: C;
  interceptors: {
    request: AxiosInterceptorManager<C>;
    response: AxiosInterceptorManager<AxiosResponse>;
  };

  getUri(config?: C): string;
  request<T = any, R = AxiosResponse<T>> (config: C): Promise<R>;
  get<T = any, R = AxiosResponse<T>>(url: string, config?: C): Promise<R>;
  delete<T = any, R = AxiosResponse<T>>(url: string, config?: C): Promise<R>;
  head<T = any, R = AxiosResponse<T>>(url: string, config?: C): Promise<R>;
  options<T = any, R = AxiosResponse<T>>(url: string, config?: C): Promise<R>;
  post<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: C): Promise<R>;
  put<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: C): Promise<R>;
  patch<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: C): Promise<R>;
}

export interface AxiosStatic extends AxiosInstance {
  create<C extends AxiosRequestConfig>(config?: C): AxiosInstance<C>;
  Cancel: CancelStatic;
  CancelToken: CancelTokenStatic;
  isCancel(value: any): boolean;
  all<T>(values: (T | Promise<T>)[]): Promise<T[]>;
  spread<T, R>(callback: (...args: T[]) => R): (array: T[]) => R;
  isAxiosError(payload: any): payload is AxiosError;
}

declare const axios: AxiosStatic;

export default axios;
