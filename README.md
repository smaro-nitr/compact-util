# Version 2.0.0

## API UTIL

- token
- contentType | `json = application/json` | `pdf = application/pdf` | `form = multipart/form-data`
- **tokenExist: ()**
- **setToken: (token: any | string, enableLocal?: boolean)**
- **destroyToken: ()**
- **isSuccess: (result: any)**
- **setInterceptorRequest: (reqDataHandler?: (config: any) => {}, reqErrorHandler?: (error: any) => {})**
- **setInterceptorResponse: (resDataHandler?: (response: any) => {}, resErrorHandler?: (error: any) => {})**
- **delete: (url: string)**
- **get: (url: string, fileDownload?: boolean, disableToken?: boolean)**
- **post: (url: string, data: any, disableToken?: boolean, multiformData?: boolean)**
- **put: (url: string, data: any)**
- **graphQl: (url: string, query: any)**

## ARRAY UTIL

- **getLength: (inputArray: any[])**
- **isEmpty: (inputArray: any[])**

## DATE UTIL

- pattern > time | `HHmmss = HH:mm:ss` | `hhmmss = hh:mm:ss A` | `HHmm = HH:mm` | `hhmm = hh:mm A`
- pattern > date | `YYYYMMDD = YYYY-MM-DD` | `DDMMYYYY = DD-MM-YYYY` | `DoMMMYYYY = Do MMM, YYYY`
- pattern > dateAndTime | `YYYYMMDDHHmmss = YYYY-MM-DD HH:mm:ss` | `DDMMYYYYhhmmss = DD-MM-YYYY hh:mm:ss A`
- timezone | `Default = Local`
- **setTimezone: (timezone: string)**
- **getFormattedStamp: (stamp: string, pattern: string): any**
- **getArrayFormattedStamp: (stamp: any[], pattern: string): any**
- **getDaysDifference: (finalDate: any, initialDate: any)**

## DOWNLOAD UTIL

- **blob: (data: any, fileName: string)**
- **file: (data: any, fileName: string, extension: string)**

## FORMAT UTIL

- **currency: (value: number)**

### number

- **noCommaNoDecimal: (value: number)**
- **noCommaWithDecimal: (value: number, decimal: number = 2)**
- **noCommaWithDecimalPercent: (value: number, decimal: number = 2)**
- **commaNoDecimal: (value: number)**
- **commaWithDecimal: (value: number, decimal: number = 2)**
- **commaWithDecimalPercent: (value: number, decimal: number = 2)**
- **toAlphabet: (value: number, caps: boolean)**
- **toRoman: (value: number, caps: boolean)**

### text

- **toTitleCase: (text: string)**
- **toLowerCase: (text: string)**
- **toUpperCase: (text: string)**

## INPUT UTIL

- **disableButtonOnClick: (buttonId: string)**
- **enableButtonManually: (buttonId: string)**
- **validateEmail: (emailId: string)**

## OBJECT UTIL

- **isEmpty: (inputObject: any)**
- **isObject: (inputObject: any)**
- **renameKey: (inputObject: any, oldKey: string, newKey: string)**

## OTHER UTIL

- **scrollTo: (id: string)**

## STORAGE UTIL

- storageKey | `Object - { [lowerCamelCase] : hypen-seprated-value }`
- **setStorageKey: (storageKeyList: any[])**
- **setLocalStorage: (key: string, value: any)**
- **removeLocalStorage: (key: string)**
- **getLocalStorage: (key: string)**
