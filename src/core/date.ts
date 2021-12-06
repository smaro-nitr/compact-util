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
      printConsoleError('DateUtil - getFormattedStamp', { stamp, pattern });
      return;
    }

    return utc(stamp)
      .tz(DateUtil.timezone)
      .format(pattern);
  },
  getArrayFormattedStamp: (stamp: any[], pattern: string): any => {
    if (
      !Array.isArray(stamp) ||
      !(stamp.length >= 3 && stamp.length <= 7) ||
      !pattern
    ) {
      printConsoleError('DateUtil - getArrayFormattedStamp', {
        stamp,
        pattern,
      });
      return;
    }

    const stampManipulator: any = JSON.parse(JSON.stringify(stamp));
    stampManipulator[1] = stampManipulator[1] - 1;

    let date = new Date();
    if (stamp.length === 7) {
      date = new Date(
        stamp[0],
        stamp[1] - 1,
        stamp[2],
        stamp[3],
        stamp[4],
        stamp[5]
      );
    } else if (stamp.length === 3) {
      date = new Date(stamp[0], stamp[1] - 1, stamp[2]);
    }

    return utc(date)
      .tz(DateUtil.timezone)
      .format(pattern);
  },
  getDaysDifference: (finalDate: any, initialDate: any) => {
    if (!finalDate || !initialDate) {
      printConsoleError('DateUtil - getDaysDifference', {
        finalDate,
        initialDate,
      });
      return;
    }

    return DateUtil.getFormattedStamp(finalDate, 'L').diff(
      DateUtil.getFormattedStamp(initialDate, 'L'),
      'days'
    );
  },
};
