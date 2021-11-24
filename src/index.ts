import { printConsoleError } from './helper';

const ArrayUtil = {
  getLength: (inputArray: any[]) => {
    if (!Array.isArray(inputArray)) {
      printConsoleError('getLength', { inputArray });
      return;
    }

    return inputArray.length;
  },
  isEmptyArray: (inputArray: any[]) => {
    if (!Array.isArray(inputArray)) {
      printConsoleError('isEmptyArray', { inputArray });
      return;
    }

    return inputArray.length === 0;
  },
};

export const CompactUil = { ArrayUtil };
