import PropTypes from "prop-types";
import { BottomNavigationAction } from "./BottomNavigationAction";

const tabs = [
  {
    name: "home",
    label: "Home",
    icon: "home",
  },
  {
    name: "tasks",
    label: "Tasks",
    icon: "tasks",
  },
  {
    name: "notes",
    label: "Notes",
    icon: "notes",
  },
  {
    name: "about",
    label: "About",
    icon: "about",
  },
];

export function BottomNavigation({ activeTab, setActiveTab }) {
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="fixed bottom-0 shadow-elevated">
      <div className="flex flex-row justify-evenly w-[100dvw]">
        {tabs.map((tab) => {
          const { name, label, icon } = tab;
          const isActive = activeTab === name;

          return (
            <BottomNavigationAction
              key={name}
              tab={name}
              icon={icon}
              label={label}
              isActive={isActive}
              onClick={() => handleTabChange(name)}
            />
          );
        })}
      </div>
    </div>
  );
}

BottomNavigation.propTypes = {
  activeTab: PropTypes.string,
  setActiveTab: PropTypes.func,
};
