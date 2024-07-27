import { IconPropTypes } from "./IconPropTypes";

export function ChevronDown({ size = 24, fill = "currentColor" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      height={size}
      width={size}
      fill={fill}
    >
      <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
    </svg>
  );
}

ChevronDown.propTypes = IconPropTypes;
