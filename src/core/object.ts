import { printConsoleError } from '../helper';

export const ObjectUtil = {
  isEmpty: (inputObject: any) => {
    if (!ObjectUtil.isObject(inputObject)) {
      printConsoleError('ObjectUtil - isEmpty', { inputObject });
      return;
    }

    return Object.keys(inputObject).length === 0;
  },
  isObject: (inputObject: any) => {
    if (!inputObject) {
      printConsoleError('ObjectUtil - isObject', { inputObject });
      return;
    }

    return inputObject.constructor === Object;
  },
  renameKey: (inputObject: any, oldKey: string, newKey: string) => {
    if (!ObjectUtil.isObject(inputObject) || !oldKey || !newKey) {
      printConsoleError('ObjectUtil - renameKey', {
        inputObject,
        oldKey,
        newKey,
      });
      return;
    }

    inputObject[newKey] = inputObject[oldKey];
    delete inputObject[oldKey];
    return;
  },
};
