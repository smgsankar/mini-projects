import PropTypes from "prop-types";
import { Icon } from "../../icons";

export function BottomNavigationAction({
  label,
  icon,
  tab,
  isActive,
  onClick,
}) {
  const onTabClick = () => {
    if (isActive) return;
    onClick(tab);
  };

  return (
    <div
      onClick={onTabClick}
      className={`transition-all ease-linear motion-reduce:transition-none p-6 flex flex-col items-center ${
        isActive ? "bg-accent-green flex-[2.5]" : "flex-1"
      }`}
    >
      <div>
        <Icon name={icon} />
      </div>
      {label}
    </div>
  );
}

BottomNavigationAction.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  tab: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
};
