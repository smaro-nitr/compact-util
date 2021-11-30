import { printConsoleError } from '../helper';

export const DownloadUtil = {
  blob: (data: any, fileName: string) => {
    if (!data || !fileName) {
      printConsoleError('DownloadUtil - blob', { data, fileName });
      return;
    }

    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(data);
    link.download = `${fileName}`;
    link.target = '_blank';
    link.click();
    link.remove();
    return;
  },
  downloadFile: (data: any, fileName: string, extension: string) => {
    const type: any = {
      csv: 'application/vnd.ms-excel',
    };

    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(
      new Blob([data], { type: type[extension] })
    );
    link.download = `${fileName}`;
    link.target = '_blank';
    link.click();
    link.remove();
  },
};
