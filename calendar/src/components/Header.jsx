import PropTypes from "prop-types";
import { addMonths, subMonths } from "date-fns";
import { ChevronLeft } from "../icons/ChevronLeft";
import { ChevronRight } from "../icons/ChevronRight";
import { getMonthAndYear } from "../lib/helpers";
import { ChevronDown } from "../icons/ChevronDown";

export function Header({ togglePicker, targetDate, setTargetDate, showToday }) {
  const handlePrevMonth = () => {
    const prevMonth = subMonths(targetDate, 1);
    setTargetDate(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = addMonths(targetDate, 1);
    setTargetDate(nextMonth);
  };

  const handleToday = () => {
    setTargetDate(new Date());
  };

  const monthAndYear = getMonthAndYear(targetDate);

  return (
    <div className="flex justify-between items-center text-accent-white px-[18px] lg:px-[14px]">
      <button
        type="button"
        onClick={handlePrevMonth}
        className="hidden lg:block p-0 hover:opacity-70 transition-opacity"
      >
        <ChevronLeft size={24} />
      </button>
      <div className="max-lg:w-[100%] flex justify-between items-baseline">
        <button
          onClick={togglePicker}
          type="button"
          className="flex items-end gap-1 hover:opacity-70 transition-opacity"
        >
          <span className="font-bold text-xl ">{monthAndYear}</span>
          <span className="block lg:hidden p-0">
            <ChevronDown size={24} />
          </span>
        </button>
        {showToday && (
          <button
            onClick={handleToday}
            className="block text-cyan-500 lg:hidden hover:underline"
          >
            Today
          </button>
        )}
      </div>
      <button
        type="button"
        onClick={handleNextMonth}
        className="hidden lg:block p-0 hover:opacity-70 transition-opacity"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}

Header.propTypes = {
  targetDate: PropTypes.instanceOf(Date).isRequired,
  setTargetDate: PropTypes.func.isRequired,
  togglePicker: PropTypes.func.isRequired,
  showToday: PropTypes.bool,
};
