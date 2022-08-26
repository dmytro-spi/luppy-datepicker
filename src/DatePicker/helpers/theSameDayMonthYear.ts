import { DateTime } from 'luxon';

const theSameDayMonthYear = (date1: DateTime, date2: DateTime) => date1.day === date2.day
  && date1.month === date2.month
  && date1.year === date2.year;

export default theSameDayMonthYear;
