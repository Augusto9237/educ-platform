import dayjs from 'dayjs';

export function getWeeksInCurrentMonth(): number {
  const currentDate = dayjs();
  const currentMonth = currentDate.month();
  const currentYear = currentDate.year();
  const firstDayOfMonth = dayjs(`${currentYear}-${currentMonth + 1}-01`);
  const lastDayOfMonth = firstDayOfMonth.add(1, 'month').subtract(1, 'day');
  const weeksInMonth = lastDayOfMonth.diff(firstDayOfMonth, 'week') + 1;

  return weeksInMonth;
}
