import { useState } from "react";
import { DayHeaderRow } from "./components/DayHeaderRow";
import { MonthDays } from "./components/MonthDays";
import { Header } from "./components/Header";
import { TODAY } from "./constants";
import { Modal } from "../Common/components/Modal";

export function Calendar() {
  const [targetDate, setTargetDate] = useState(TODAY);
  const [pickerActive, setPickerActive] = useState(false);

  const togglePicker = () => {
    setPickerActive((prev) => !prev);
  };

  return (
    <>
      <div className="flex items-center justify-center h-[100dvh] w-[100dvw]">
        <div className="flex flex-col gap-4">
          <Header
            togglePicker={togglePicker}
            targetDate={targetDate}
            setTargetDate={setTargetDate}
          />
          <div className="grid grid-cols-7">
            <DayHeaderRow />
            <MonthDays targetDate={targetDate} />
          </div>
        </div>
      </div>
      <Modal open={pickerActive} onClose={togglePicker}>
        Some dialog
        <a onClick={togglePicker}>close</a>
      </Modal>
    </>
  );
}
