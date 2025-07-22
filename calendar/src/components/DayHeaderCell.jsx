import PropTypes from "prop-types";

export function DayHeaderCell({ day }) {
  return (
    <span className="w-10 h-10 flex items-center justify-center rounded-full text-accent-white m-2">
      {day}
    </span>
  );
}

DayHeaderCell.propTypes = {
  day: PropTypes.string.isRequired,
};
