import PropTypes from "prop-types";
import { HomeIcon } from "./Home";
import { NotesIcon } from "./Notes";
import { TasksIcon } from "./Tasks";
import { InfoIcon } from "./Info";

export function Icon({ name, size = 24, color = "#000" }) {
  switch (name) {
    case "home":
      return <HomeIcon size={size} color={color} />;
    case "notes":
      return <NotesIcon size={size} color={color} />;
    case "tasks":
      return <TasksIcon size={size} color={color} />;
    case "about":
      return <InfoIcon size={size} color={color} />;
    default:
      return null;
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
};
