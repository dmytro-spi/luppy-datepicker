import React, { useMemo } from 'react';
import { DateTime } from 'luxon';
import Day from './components/Day/Day';
import ThemeContext, { TTheme } from './context/ThemeContext';
import styles from './DatePicker.module.scss';

type TDatePickerProps = {
  theme?: TTheme;
};

function DatePicker({ theme }: TDatePickerProps) {
  const currentTheme = useMemo(() => theme || 'light', [theme]);

  return (
    <ThemeContext.Provider value={currentTheme}>
      <div className={styles.datePicker}>
        <Day
          date={DateTime.now()}
          onClick={(date) => console.log('It works', date)}
          firstDayOfWeek={1}
        />
      </div>
    </ThemeContext.Provider>
  );
}

DatePicker.defaultProps = {
  theme: 'light',
};

export default DatePicker;
