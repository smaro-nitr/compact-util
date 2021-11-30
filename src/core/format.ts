import numeral from 'numeral';
import { printConsoleError } from '../helper';

export const FormatUtil = {
  currency: (value: number) => {
    if (!value) {
      printConsoleError('FormatUtil - currency', { value });
      return;
    }

    const isNegativeValue = value < 0;
    const absoluteValue = Math.abs(value);

    const prefix = [
      { value: 1, symbol: '' },
      { value: 1e3, symbol: 'K' },
      { value: 1e6, symbol: 'MM' },
      { value: 1e9, symbol: 'BN' },
      { value: 1e12, symbol: 'T' },
      { value: 1e15, symbol: 'P' },
      { value: 1e18, symbol: 'E' },
    ];

    let i;
    for (i = prefix.length - 1; i > 0; i--) {
      if (absoluteValue >= prefix[i].value) {
        break;
      }
    }

    const decimal =
      absoluteValue > 1e9 && absoluteValue < 10e9
        ? 2
        : absoluteValue > 10e9 && absoluteValue < 100e9
        ? 3
        : 1;

    const outputValue =
      (absoluteValue / prefix[i].value).toFixed(decimal) + prefix[i].symbol;

    return `${isNegativeValue ? '-' : ''}${outputValue}`;
  },
  number: {
    noCommaNoDecimal: (value: number) => {
      if (!value) {
        printConsoleError('FormatUtil - noCommaNoDecimal', { value });
        return;
      }

      return Math.round(value);
    },
    noCommaWithDecimal: (value: number, decimal: number = 2) => {
      if (!value) {
        printConsoleError('FormatUtil - noCommaTwoDecimal', { value });
        return;
      }

      const format = '0';
      const extendedFormat = '0'.repeat(decimal);
      return numeral(value).format(`${format}.${extendedFormat}`);
    },
    noCommaWithDecimalPercent: (value: number, decimal: number = 2) => {
      if (!value) {
        printConsoleError('FormatUtil - noCommaTwoDecimalPercent', { value });
        return;
      }

      return FormatUtil.number.noCommaWithDecimal(value * 100, decimal);
    },
    commaNoDecimal: (value: number) => {
      if (!value) {
        printConsoleError('FormatUtil - commaNoDecimal', { value });
        return;
      }

      const format = '0,0';
      return numeral(value).format(format);
    },
    commaWithDecimal: (value: number, decimal: number = 2) => {
      if (!value) {
        printConsoleError('FormatUtil - commaTwoDecimal', { value });
        return;
      }

      const format = '0,0';
      const extendedFormat = '0'.repeat(decimal);
      return numeral(value).format(`${format}.${extendedFormat}`);
    },
    commaWithDecimalPercent: (value: number, decimal: number = 2) => {
      if (!value) {
        printConsoleError('FormatUtil - commaTwoDecimalPercent', { value });
        return;
      }

      return FormatUtil.number.commaWithDecimal(value * 100, decimal);
    },
  },
  text: {
    toTitleCase: (text: string) => {
      if (!text) {
        printConsoleError('FormatUtil - toTitleCase', { text });
        return;
      }

      return `${text.charAt(0).toUpperCase()}${text.substr(1).toLowerCase()}`;
    },
    toLowerCase: (text: string) => {
      if (!text || Array.isArray(text) || text.constructor === Object) {
        printConsoleError('FormatUtil - toLowerCase', { text });
        return;
      }

      return text.toString().toLowerCase();
    },
    toUpperCase: (text: string) => {
      if (!text || Array.isArray(text) || text.constructor === Object) {
        printConsoleError('FormatUtil - toUpperCase', { text });
        return;
      }

      return text.toString().toUpperCase();
    },
  },
};
