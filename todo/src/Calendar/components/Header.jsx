import PropTypes from "prop-types";
import { addMonths, subMonths } from "date-fns";
import { ChevronLeft } from "../../icons/ChevronLeft";
import { ChevronRight } from "../../icons/ChevronRight";
import { getMonthAndYear } from "../helpers";
import { ChevronDown } from "../../icons/ChevronDown";

export function Header({ targetDate, setTargetDate }) {
  const handlePrevMonth = () => {
    const prevMonth = subMonths(targetDate, 1);
    setTargetDate(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = addMonths(targetDate, 1);
    setTargetDate(nextMonth);
  };

  const monthAndYear = getMonthAndYear(targetDate);

  return (
    <div className="flex justify-between items-center font-bold text-xl px-[14px] lg:px-0">
      <a
        type="button"
        onClick={handlePrevMonth}
        className="hidden lg:block text-accent-white p-0"
      >
        <ChevronLeft size={24} />
      </a>
      <a type="button" className="flex items-end gap-1">
        <span className="text-accent-white">{monthAndYear}</span>
        <span className="block lg:hidden text-accent-white p-0">
          <ChevronDown size={24} />
        </span>
      </a>
      <a
        type="button"
        onClick={handleNextMonth}
        className="hidden lg:block text-accent-white p-0"
      >
        <ChevronRight size={24} />
      </a>
    </div>
  );
}

Header.propTypes = {
  targetDate: PropTypes.instanceOf(Date).isRequired,
  setTargetDate: PropTypes.func.isRequired,
};
