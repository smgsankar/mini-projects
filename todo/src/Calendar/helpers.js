import { addMonths, addYears, startOfDecade, endOfDecade } from 'date-fns'

export function getMonthAndYear(date) {
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  return `${month} ${year}`;
}

export function getPickerModalTitle(pickerState, targetDate) {
  return pickerState === "month" ? targetDate.getFullYear() : `${startOfDecade(targetDate).getFullYear()} - ${endOfDecade(targetDate).getFullYear()}`;
}

export function getPickerModalTileDates(pickerState, startTileDate) {
  return Array.from(
    { length: pickerState === "month" ? 12 : 10 },
    (_, i) =>
      pickerState === "month"
        ? addMonths(startTileDate, i)
        : addYears(startTileDate, i)
  );
}