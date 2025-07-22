import { DayHeaderCell } from "./DayHeaderCell";
import { WEEKDAYS } from "../lib/constants";

export function DayHeaderRow() {
  return (
    <>
      {WEEKDAYS.map((day) => (
        <DayHeaderCell key={day} day={day} />
      ))}
    </>
  );
}
