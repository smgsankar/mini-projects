import PropTypes from "prop-types";

export function DayHeaderCell({ day }) {
  return (
    <span className="flex items-center justify-center rounded-full p-2 text-accent-white">
      {day}
    </span>
  );
}

DayHeaderCell.propTypes = {
  day: PropTypes.string.isRequired,
};
