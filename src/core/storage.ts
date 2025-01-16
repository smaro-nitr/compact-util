import { printConsoleError } from '../helper';
import { ObjectUtil } from './object';

export const StorageUtil = {
  storageKey: {
    token: 'token',
  },
  setStorageKey: (storageKeyList: any[]) => {
    storageKeyList.forEach(storageKey => {
      if (!ObjectUtil.isObject(storageKey)) {
        printConsoleError('StorageUtil - setStorageKey', { storageKey });
        return;
      }

      const originalStorageKey: any = StorageUtil.storageKey;
      const key: any = Object.keys(storageKey);
      originalStorageKey[key] = storageKey[key];
    });
    return;
  },
  setLocalStorage: (key: string, value: any) => {
    const availableKey: any = StorageUtil.storageKey;
    if (!key || !availableKey[key]) {
      printConsoleError('StorageUtil - setLocalStorage', { key });
      return;
    }

    window.localStorage.setItem(
      key,
      typeof value === 'string' ? value : JSON.stringify(value)
    );
    return value;
  },
  removeLocalStorage: (key: string) => {
    const availableKey: any = StorageUtil.storageKey;
    if (!key || !availableKey[key]) {
      printConsoleError('StorageUtil - removeLocalStorage', { key });
      return;
    }

    window.localStorage.removeItem(key);
    return;
  },
  getLocalStorage: (key: string) => {
    const availableKey: any = StorageUtil.storageKey;
    if (!key || !availableKey[key]) {
      printConsoleError('StorageUtil - getLocalStorage', { key });
      return;
    }

    return window.localStorage.getItem(key) || '';
  },
};
