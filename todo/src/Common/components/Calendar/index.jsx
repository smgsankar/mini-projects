import { useState } from "react";
import { MonthYearPickerModal } from "./components/MonthYearPickerModal";
import { DayHeaderRow } from "./components/DayHeaderRow";
import { MonthDays } from "./components/MonthDays";
import { Header } from "./components/Header";
import { TODAY } from "./constants";
import { isSameMonth } from "date-fns";

export function Calendar() {
  const [targetDate, setTargetDate] = useState(TODAY);
  const [pickerActive, setPickerActive] = useState(false);

  const togglePicker = () => {
    setPickerActive((prev) => !prev);
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <Header
          showToday={!isSameMonth(targetDate, TODAY)}
          togglePicker={togglePicker}
          targetDate={targetDate}
          setTargetDate={setTargetDate}
        />
        <div className="grid grid-cols-7">
          <DayHeaderRow />
          <MonthDays targetDate={targetDate} />
        </div>
      </div>
      <MonthYearPickerModal
        open={pickerActive}
        onClose={togglePicker}
        targetDate={targetDate}
        setTargetDate={setTargetDate}
      />
    </>
  );
}
