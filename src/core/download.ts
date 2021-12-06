import { printConsoleError } from '../helper';

export const DownloadUtil = {
  blob: (data: any, fileName: string) => {
    if (!data || !fileName) {
      printConsoleError('DownloadUtil - blob', { data, fileName });
      return;
    }

    const temporaryAnchor = document.createElement('a');
    temporaryAnchor.href = window.URL.createObjectURL(data);
    temporaryAnchor.setAttribute('download', `${fileName}`);
    temporaryAnchor.setAttribute('target', '_blank');
    document.body.appendChild(temporaryAnchor);
    temporaryAnchor.click();
    document.body.removeChild(temporaryAnchor);
    return;
  },
  file: (data: any, fileName: string, extension: string) => {
    if (!data || !fileName || !extension) {
      printConsoleError('DownloadUtil - file', { data, fileName, extension });
      return;
    }

    const type: any = {
      csv: 'application/vnd.ms-excel',
      pdf: 'application/pdf',
    };

    const temporaryAnchor = document.createElement('a');
    temporaryAnchor.href = window.URL.createObjectURL(
      new Blob([data], { type: type[extension] })
    );
    temporaryAnchor.setAttribute('download', `${fileName}.${extension}`);
    temporaryAnchor.setAttribute('target', '_blank');
    document.body.appendChild(temporaryAnchor);
    temporaryAnchor.click();
    document.body.removeChild(temporaryAnchor);
    return;
  },
};
