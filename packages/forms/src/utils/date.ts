export function getLastDayOfMonth({
  year,
  month,
}: {
  year: number;
  month: number;
}) {
  const d = new Date(year, month, 0);
  return d.getUTCDate();
}

export function zeroPadDate(value: number): string {
  return value < 10 ? `0${value}` : `${value}`;
}
