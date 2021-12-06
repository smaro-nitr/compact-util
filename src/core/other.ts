import { printConsoleError } from '../helper';

export const OtherUtil = {
  scrollTo: (id: string) => {
    const scrollEl = document.getElementById(id);
    if (!id || !scrollEl) {
      printConsoleError('OtherUtil - scrollTo', { id, scrollEl });
      return;
    }

    if (scrollEl) scrollEl.scrollIntoView();
    return;
  },
};
