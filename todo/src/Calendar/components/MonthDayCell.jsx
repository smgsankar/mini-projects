import PropTypes from "prop-types";

export function MonthDayCell({ day, isCurrentMonth, isToday }) {
  return (
    <div
      className={`flex items-center justify-center rounded-xl p-2 ${
        isCurrentMonth ? "text-accent-white" : "text-accent-grey"
      } ${isToday ? "bg-accent-green" : ""}`}
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
