import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Modal } from "./Modal";
import { ChevronLeft } from "../icons/ChevronLeft";
import { ChevronRight } from "../icons/ChevronRight";
import { getPickerModalTileDates, getPickerModalTitle } from "../lib/helpers";
import {
  addYears,
  isSameMonth,
  isSameYear,
  startOfDecade,
  startOfYear,
  subYears,
} from "date-fns";

export function MonthYearPickerModal({
  open,
  onClose,
  targetDate,
  setTargetDate,
}) {
  const [pickerDate, setPickerDate] = useState(targetDate);
  const [pickerState, setPickerState] = useState("month");
  const title = getPickerModalTitle(pickerState, pickerDate);

  const startTileDate =
    pickerState === "month"
      ? startOfYear(pickerDate)
      : startOfDecade(pickerDate);

  const tileDates = getPickerModalTileDates(pickerState, startTileDate);

  const onLeftClick = () => {
    if (pickerState === "month") {
      setPickerDate((prev) => subYears(prev, 1));
    } else {
      setPickerDate((prev) => subYears(prev, 10));
    }
  };

  const onRightClick = () => {
    if (pickerState === "month") {
      setPickerDate((prev) => addYears(prev, 1));
    } else {
      setPickerDate((prev) => addYears(prev, 10));
    }
  };

  const onPickerStateChange = () => {
    if (pickerState === "year") return;
    setPickerState("year");
  };

  const handleTileClick = (date) => {
    if (pickerState === "month") {
      setTargetDate(date);
      onClose();
    } else {
      setPickerDate(date);
      setPickerState("month");
    }
  };

  const isCurrentTile = (date) => {
    if (pickerState === "month") {
      return isSameMonth(date, targetDate);
    }
    return isSameYear(date, targetDate);
  };

  useEffect(() => {
    setPickerState("month");
    setPickerDate(targetDate);
  }, [targetDate, open]);

  return (
    <Modal open={open} onClose={onClose}>
      <div className="w-[20rem] p-4 pt-5 pb-8 rounded-xl flex flex-col gap-4 bg-dark-surface">
        <div className="flex justify-between">
          <button 
            onClick={onLeftClick}
            className="hover:opacity-70 transition-opacity"
          >
            <ChevronLeft />
          </button>
          <button 
            onClick={onPickerStateChange}
            className="hover:underline"
          >
            {title}
          </button>
          <button 
            onClick={onRightClick}
            className="hover:opacity-70 transition-opacity"
          >
            <ChevronRight />
          </button>
        </div>
        <div className="grid grid-flow-row grid-cols-3 gap-y-2">
          {tileDates.map((date) => (
            <button
              key={date}
              className={`text-center m-1 p-2 rounded-lg cursor-pointer transition-colors ${
                isCurrentTile(date) ? "bg-cyan-500 text-white" : "text-accent-white"
              } hover:bg-dark-card`}
              onClick={() => {
                handleTileClick(date);
              }}
            >
              {date.toLocaleString("default", {
                month: pickerState === "month" ? "long" : undefined,
                year: pickerState === "year" ? "numeric" : undefined,
              })}
            </button>
          ))}
        </div>
      </div>
    </Modal>
  );
}

MonthYearPickerModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  targetDate: PropTypes.instanceOf(Date).isRequired,
  setTargetDate: PropTypes.func.isRequired,
};
