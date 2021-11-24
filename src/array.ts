import { printConsoleError } from './helper';

export const ArrayUtil = {
  getLength: (inputArray: any[]) => {
    if (!Array.isArray(inputArray)) {
      printConsoleError('getLength', { inputArray });
      return;
    }

    return inputArray.length;
  },
  isEmpty: (inputArray: any[]) => {
    if (!Array.isArray(inputArray)) {
      printConsoleError('isEmptyArray', { inputArray });
      return;
    }

    return inputArray.length === 0;
  },
};
