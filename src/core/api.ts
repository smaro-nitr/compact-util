import Axios from 'axios';
import { ObjectUtil } from '..';
import { StorageUtil } from '..';
import { printConsoleError } from '../helper';

export const ApiUtil = {
  token: null,
  contentType: {
    json: 'application/json',
    pdf: 'application/pdf',
    form: 'multipart/form-data',
  },
  tokenExist: () => {
    const authorization = ApiUtil.token || StorageUtil.getLocalStorage('token');
    return Boolean(authorization);
  },
  setToken: (token: any | string, enableLocal?: boolean) => {
    if (enableLocal) {
      StorageUtil.setLocalStorage(
        'token',
        typeof token === 'string' ? token : JSON.stringify(token)
      );
    } else {
      ApiUtil.token = token;
    }
    return;
  },
  destroyToken: () => {
    StorageUtil.removeLocalStorage('token');
    ApiUtil.token = null;
    return;
  },
  setInterceptorRequest: (
    reqDataHandler?: (config: any) => {},
    reqErrorHandler?: (error: any) => {}
  ) => {
    Axios.interceptors.request.use(
      (config: any) => {
        if (reqDataHandler) reqDataHandler(config);
        return config;
      },
      (error: any) => {
        if (reqErrorHandler) reqErrorHandler(error);
        return Promise.reject(error);
      }
    );
  },
  setInterceptorResponse: (
    resDataHandler?: (response: any) => {},
    resErrorHandler?: (error: any) => {}
  ) => {
    Axios.interceptors.response.use(
      (response: any) => {
        if (resDataHandler) resDataHandler(response);
        return response;
      },
      (error: any) => {
        if (resErrorHandler) resErrorHandler(error);
        return Promise.reject(error);
      }
    );
  },
  isSuccess: (result: any) => {
    if (!result) {
      printConsoleError('ApiUtil - isSuccess', { result });
      return;
    }

    return result?.response?.status >= 200 && result?.response?.status < 300;
  },
  delete: (url: string) => {
    const payload: any = {
      method: 'DELETE',
      url,
      headers: { 'Content-Type': ApiUtil.contentType.json },
    };
    const authorization = ApiUtil.token || StorageUtil.getLocalStorage('token');
    if (authorization) payload.headers.authorization = authorization;
    return Axios(payload);
  },
  get: (url: string, fileDownload?: boolean, disableToken?: boolean) => {
    const payload: any = {
      method: 'GET',
      url,
      headers: {
        'Content-Type': fileDownload
          ? ApiUtil.contentType.pdf
          : ApiUtil.contentType.json,
      },
    };
    const authorization = ApiUtil.token || StorageUtil.getLocalStorage('token');
    if (authorization && !disableToken)
      payload.headers.authorization = authorization;
    if (fileDownload) payload.responseType = 'arraybuffer';
    return Axios(payload);
  },
  post: (
    url: string,
    data: any,
    disableToken?: boolean,
    contentType?: boolean
  ) => {
    const payload: any = {
      method: 'POST',
      url,
      data,
      headers: { 'Content-Type': contentType || ApiUtil.contentType.json },
    };
    const authorization = ApiUtil.token || StorageUtil.getLocalStorage('token');
    if (authorization && !disableToken)
      payload.headers.authorization = authorization;
    return Axios(payload);
  },
  put: (
    url: string,
    data: any,
    disableToken?: boolean,
    contentType?: boolean
  ) => {
    const payload: any = {
      method: 'PUT',
      url,
      data,
      headers: { 'Content-Type': contentType || ApiUtil.contentType.json },
    };
    const authorization = ApiUtil.token || StorageUtil.getLocalStorage('token');
    if (authorization && !disableToken)
      payload.headers.authorization = authorization;
    return Axios(payload);
  },
  graphQl: (url: string, query: any, disableToken?: boolean) => {
    const payload: any = {
      method: 'POST',
      url,
      data: ObjectUtil.isObject(query)
        ? query
        : JSON.stringify({
            query: query,
          }),
      headers: {
        'Content-Type': ApiUtil.contentType.json,
        Accept: ApiUtil.contentType.json,
      },
    };
    const authorization = ApiUtil.token || StorageUtil.getLocalStorage('token');
    if (authorization) payload.headers.authorization = authorization;
    if (disableToken) delete payload.headers.authorization;
    return Axios(payload);
  },
};
