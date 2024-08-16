import { useAppState } from "../../store";
import { tabs } from "../../utils/constants";
import { BottomNavigationAction } from "./BottomNavigationAction";

export function BottomNavigation() {
  const { activeTab, setActiveTab } = useAppState();
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
