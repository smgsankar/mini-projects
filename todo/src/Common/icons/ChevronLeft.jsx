import { IconPropTypes } from "./IconPropTypes";

export function ChevronLeft({ size = 24, fill = "currentColor" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      height={size}
      width={size}
      fill={fill}
    >
      <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
    </svg>
  );
}

ChevronLeft.propTypes = IconPropTypes;
