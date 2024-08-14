import { IconPropTypes } from "./IconPropTypes";

export function ChevronRight({ size = 24, fill = "currentColor" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      height={size}
      width={size}
      fill={fill}
    >
      <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
    </svg>
  );
}

ChevronRight.propTypes = IconPropTypes;
