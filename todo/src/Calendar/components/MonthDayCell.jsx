import PropTypes from "prop-types";

export function MonthDayCell({ day, isCurrentMonth, isToday }) {
  return (
    <div
      tabIndex={1}
      className={`flex items-center justify-center rounded-xl p-2 ${
        isCurrentMonth ? "text-accent-white" : "text-accent-grey"
      } ${
        isToday ? "bg-accent-green" : ""
      } hover:outline hover:outline-accent-grey active:outline active:outline-accent-grey`}
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
