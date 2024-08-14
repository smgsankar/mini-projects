import PropTypes from "prop-types";

export function MonthDayCell({ day, isCurrentMonth, isToday }) {
  return (
    <div
      tabIndex={1}
      className={`w-cell h-cell flex items-center justify-center rounded-xl m-2 ${
        isCurrentMonth ? "text-accent-white" : "text-accent-grey"
      } ${
        isToday ? "bg-accent-green" : ""
      } hover:outline hover:outline-accent-green active:outline active:outline-accent-green`}
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
