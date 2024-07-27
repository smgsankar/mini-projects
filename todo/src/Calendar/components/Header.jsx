import PropTypes from "prop-types";
import { addMonths, subMonths } from "date-fns";
import { ChevronLeft } from "../../icons/ChevronLeft";
import { ChevronRight } from "../../icons/ChevronRight";
import { getMonthAndYear } from "../helpers";
import { ChevronDown } from "../../icons/ChevronDown";

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
      <a
        type="button"
        onClick={handlePrevMonth}
        className="hidden lg:block p-0"
      >
        <ChevronLeft size={24} />
      </a>
      <div className="max-lg:w-[100%] flex justify-between items-baseline">
        <a
          onClick={togglePicker}
          type="button"
          className="flex items-end gap-1"
        >
          <span className="font-bold text-xl ">{monthAndYear}</span>
          <span className="block lg:hidden p-0">
            <ChevronDown size={24} />
          </span>
        </a>
        {showToday && (
          <a
            onClick={handleToday}
            className="block text-cyan-500 lg:hidden hover:underline"
          >
            Today
          </a>
        )}
      </div>
      <a
        type="button"
        onClick={handleNextMonth}
        className="hidden lg:block p-0"
      >
        <ChevronRight size={24} />
      </a>
    </div>
  );
}

Header.propTypes = {
  targetDate: PropTypes.instanceOf(Date).isRequired,
  setTargetDate: PropTypes.func.isRequired,
  togglePicker: PropTypes.func.isRequired,
  showToday: PropTypes.bool,
};
