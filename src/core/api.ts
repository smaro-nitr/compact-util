import { printConsoleError } from '../helper';

export const ApiUtil = {
  isSuccess: (result: any) => {
    if (!result) {
      printConsoleError('ApiUtil - isSuccess', { result });
      return;
    }

    return result?.response?.status >= 200 && result?.response?.status < 300;
  },
};
