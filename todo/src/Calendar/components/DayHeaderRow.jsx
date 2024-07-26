import { DayHeaderCell } from "./DayHeaderCell";
import { WEEKDAYS } from "../constants";

export function DayHeaderRow() {
  return (
    <>
      {WEEKDAYS.map((day) => (
        <DayHeaderCell key={day} day={day} />
      ))}
    </>
  );
}
