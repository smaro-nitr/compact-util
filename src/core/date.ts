import { tz, utc } from 'moment-timezone';
import { printConsoleError } from '../helper';

export const DateUtil = {
  pattern: {
    time: {
      HHmmss: 'HH:mm:ss',
      hhmmss: 'hh:mm:ss A',
      HHmm: 'HH:mm',
      hhmm: 'hh:mm A',
    },
    date: {
      YYYYMMDD: 'YYYY-MM-DD',
      DDMMYYYY: 'DD-MM-YYYY',
      DoMMMYYYY: 'Do MMM, YYYY',
    },
    dateAndTime: {
      YYYYMMDDHHmmss: 'YYYY-MM-DD HH:mm:ss',
      DDMMYYYYhhmmss: 'DD-MM-YYYY hh:mm:ss A',
    },
  },
  timezone: tz.guess(),
  setTimezone: (timezone: string) => {
    if (!timezone || !tz.zone(timezone)) {
      printConsoleError('DateUtil - setTimezone', { timezone });
      return;
    }

    DateUtil.timezone = timezone;
    return;
  },
  getFormattedStamp: (stamp: string, pattern: string): any => {
    if (!stamp || !pattern) {
      printConsoleError('DateUtil - formatTime', { stamp, pattern });
      return;
    }

    return utc(stamp)
      .tz(DateUtil.timezone)
      .format(pattern);
  },
  getDaysDifference: (finalDate: any, initialDate: any) => {
    return DateUtil.getFormattedStamp(finalDate, 'L').diff(
      DateUtil.getFormattedStamp(initialDate, 'L'),
      'days'
    );
  },
};
