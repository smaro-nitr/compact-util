import { printConsoleError } from '../helper';

export const InputUtil = {
  disableButtonOnClick: (buttonId: string) => {
    if (!buttonId) {
      printConsoleError('InputUtil - disableButtonOnClick', { buttonId });
      return;
    }

    const buttonEl: any = document.getElementById(buttonId);
    if (buttonEl) buttonEl.disabled = true;
    return;
  },
  enableButtonManually: (buttonId: string) => {
    if (!buttonId) {
      printConsoleError('InputUtil - enableButtonManually', { buttonId });
      return;
    }

    const buttonEl: any = document.getElementById(buttonId);
    if (buttonEl) buttonEl.disabled = false;
    return;
  },
  validateEmail: (emailId: string) => {
    if (!emailId) {
      printConsoleError('InputUtil - validateEmail', { emailId });
      return;
    }

    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(emailId).toLowerCase());
  },
};
