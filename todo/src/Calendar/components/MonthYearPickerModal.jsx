import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Modal } from "../../Common/components/Modal";
import { ChevronLeft } from "../../icons/ChevronLeft";
import { ChevronRight } from "../../icons/ChevronRight";
import { getPickerModalTileDates, getPickerModalTitle } from "../helpers";
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
      <div className="w-[20rem] p-4 pt-5 pb-8 rounded-xl flex flex-col gap-4">
        <div className="flex justify-between">
          <a onClick={onLeftClick}>
            <ChevronLeft />
          </a>
          <a onClick={onPickerStateChange}>{title}</a>
          <a onClick={onRightClick}>
            <ChevronRight />
          </a>
        </div>
        <div className="grid grid-flow-row grid-cols-3 gap-y-2">
          {tileDates.map((date) => (
            <a
              key={date}
              className={`text-center m-1 p-2 rounded-lg cursor-pointer ${
                isCurrentTile(date) ? "bg-gray-200" : ""
              } hover:underline`}
              onClick={() => {
                handleTileClick(date);
              }}
            >
              {date.toLocaleString("default", {
                month: pickerState === "month" ? "long" : undefined,
                year: pickerState === "year" ? "numeric" : undefined,
              })}
            </a>
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
