import PropTypes from "prop-types";

export function MonthDayCell({ day, isCurrentMonth, isToday }) {
  return (
    <div
      tabIndex={0}
      className={`w-10 h-10 flex items-center justify-center rounded-xl m-2 cursor-pointer transition-colors ${
        isCurrentMonth ? "text-accent-white" : "text-text-secondary"
      } ${
        isToday ? "bg-cyan-500 text-white" : ""
      } hover:bg-dark-card hover:text-accent-white focus:bg-dark-card focus:text-accent-white focus:outline-none`}
    >
      {day.getDate()}
    </div>
  );
}

MonthDayCell.propTypes = {
  day: PropTypes.instanceOf(Date).isRequired,
  isCurrentMonth: PropTypes.bool.isRequired,
  isToday: PropTypes.bool.isRequired,
};
