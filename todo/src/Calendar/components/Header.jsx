import PropTypes from "prop-types";
import { addMonths, subMonths } from "date-fns";
import { ChevronLeft } from "../../icons/ChevronLeft";
import { ChevronRight } from "../../icons/ChevronRight";
import { getMonthAndYear } from "../helpers";

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
    <div className="flex justify-between font-bold text-xl">
      <a
        type="button"
        onClick={handlePrevMonth}
        className="text-accent-white p-0"
      >
        <ChevronLeft size={32} />
      </a>
      <span className="text-accent-white">{monthAndYear}</span>
      <a
        type="button"
        onClick={handleNextMonth}
        className="text-accent-white p-0"
      >
        <ChevronRight size={32} />
      </a>
    </div>
  );
}

Header.propTypes = {
  targetDate: PropTypes.instanceOf(Date).isRequired,
  setTargetDate: PropTypes.func.isRequired,
};
