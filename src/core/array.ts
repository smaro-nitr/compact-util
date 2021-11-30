import { printConsoleError } from '../helper';

export const ArrayUtil = {
  getLength: (inputArray: any[]) => {
    if (!Array.isArray(inputArray)) {
      printConsoleError('ArrayUtil - getLength', { inputArray });
      return;
    }

    return inputArray.length;
  },
  isEmpty: (inputArray: any[]) => {
    if (!Array.isArray(inputArray)) {
      printConsoleError('ArrayUtil - isEmpty', { inputArray });
      return;
    }

    return inputArray.length === 0;
  },
};
