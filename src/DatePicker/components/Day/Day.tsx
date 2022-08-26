import React, { useContext } from 'react';
import { DateTime } from 'luxon';
import styles from './Day.module.scss';
import dayFromFirstDayOfWeek from '../../helpers/dayFromFirstDayOfWeek';
import ThemeContext from '../../context/ThemeContext';
import theSameDayMonthYear from '../../helpers/theSameDayMonthYear';
import classArrayToStr from '../../helpers/classArrayToStr';

type TDayProps = {
  className?: string;
  forceClassName?: string;
  date?: DateTime;
  onClick?: (date: DateTime) => void;
  firstDayOfWeek?: number;
  highlightedDates?: DateTime[];
};

function Day({
  className,
  forceClassName,
  date,
  onClick,
  firstDayOfWeek,
  highlightedDates,
}: TDayProps) {
  const theme = useContext(ThemeContext);

  const currentDate = date || DateTime.now();

  const firstDayOfMonth = currentDate.startOf('month');

  const weekDay = dayFromFirstDayOfWeek(currentDate.weekday, firstDayOfWeek || 0); // 1-7
  const dayOfMonth = currentDate.day;
  const weekOfMonth = Math.ceil((firstDayOfMonth.weekday + dayOfMonth - 1) / 7);

  const highlighted = highlightedDates
    ?.some((dt) => theSameDayMonthYear(dt, currentDate));

  return (
    <div
      className={
        forceClassName
        || classArrayToStr([
          styles.day,
          styles[`day__${theme}`],
          highlighted && styles.day__highlight,
          className,
        ])
      }
      style={{ gridColumn: weekDay, gridRow: weekOfMonth }}
      role="button"
      onClick={() => onClick?.(currentDate)}
      onKeyPress={() => onClick?.(currentDate)}
      tabIndex={weekDay * weekOfMonth}
    >
      {dayOfMonth}
    </div>
  );
}

Day.defaultProps = {
  className: null,
  forceClassName: null,
  date: DateTime.now(),
  onClick: () => {},
  firstDayOfWeek: 1,
  highlightedDates: [],
};

export default Day;
