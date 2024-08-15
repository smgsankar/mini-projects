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
    <div className="fixed bottom-0 bg-white shadow-topElevated">
      <div className="flex flex-row justify-evenly w-full">
        {tabs.map((tab, index) => {
          const { name, label, icon } = tab;
          const isActive = activeTab === index;

          return (
            <BottomNavigationAction
              key={name}
              tab={name}
              icon={icon}
              label={label}
              isActive={isActive}
              onClick={() => handleTabChange(index)}
            />
          );
        })}
      </div>
    </div>
  );
}

BottomNavigation.propTypes = {
  activeTab: PropTypes.number,
  setActiveTab: PropTypes.func,
};
