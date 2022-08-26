const dayFromFirstDayOfWeek = (day: number, firstDayOfWeek: number) => {
  const dayOfWeek = day % 7;
  const firstDayOfWeekOfMonth = firstDayOfWeek % 7;

  return (dayOfWeek + 7 - firstDayOfWeekOfMonth) % 7;
};

export default dayFromFirstDayOfWeek;
