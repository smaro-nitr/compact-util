import Axios from 'axios';
import { ObjectUtil } from '..';
import { printConsoleError } from '../helper';

export const ApiUtil = {
  token: null,
  contentType: {
    json: 'application/json',
    pdf: 'application/pdf',
    form: 'multipart/form-data',
  },
  setToken: (token: any) => {
    ApiUtil.token = token;
    return;
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
      headers: {
        authorization: ApiUtil.token,
        'Content-Type': ApiUtil.contentType.json,
      },
    };
    return Axios(payload);
  },
  get: (url: string, fileDownload?: boolean, disableToken?: boolean) => {
    const authorization = ApiUtil.token;
    const payload: any = {
      method: 'GET',
      url,
      headers: {
        authorization,
        'Content-Type': fileDownload
          ? ApiUtil.contentType.pdf
          : ApiUtil.contentType.json,
      },
    };
    if (disableToken) delete payload.headers.authorization;
    if (fileDownload) payload.responseType = 'arraybuffer';
    return Axios(payload);
  },
  post: (
    url: string,
    data: any,
    disableToken?: boolean,
    multiformData?: boolean
  ) => {
    const payload: any = {
      method: 'POST',
      url,
      data,
      headers: {
        authorization: ApiUtil.token,
        'Content-Type': ApiUtil.contentType.json,
      },
    };
    if (disableToken) delete payload.headers.authorization;
    if (multiformData)
      payload.headers['Content-Type'] = ApiUtil.contentType.form;
    return Axios(payload);
  },
  put: (url: string, data: any) => {
    const payload: any = {
      method: 'PUT',
      url,
      data,
      headers: {
        authorization: ApiUtil.token,
        'Content-Type': ApiUtil.contentType.json,
      },
    };
    return Axios(payload);
  },
  graphQl: (url: string, query: any) => {
    const payload: any = {
      method: 'POST',
      url,
      data: ObjectUtil.isObject(query)
        ? query
        : JSON.stringify({
            query: query,
          }),
      headers: {
        authorization: ApiUtil.token,
        'Content-Type': ApiUtil.contentType.json,
        Accept: ApiUtil.contentType.json,
      },
    };
    return Axios(payload);
  },
};
