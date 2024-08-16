import { TabContent } from "../Common/components/TabContent";
import { SectionHeader } from "./components/SectionHeader";
import { tabIndices } from "../Common/utils/constants";
import { useAppState } from "../Common/store";

export function Home() {
  const { activeTab, setActiveTab } = useAppState();

  if (activeTab !== tabIndices.home) return <TabContent />;

  const seeAllTasks = () => {
    setActiveTab(tabIndices.tasks);
  };

  const seeAllNotes = () => {
    setActiveTab(tabIndices.notes);
  };

  return (
    <TabContent>
      <div className="h-fill w-fill flex flex-col gap-4">
        <div className="w-fill">
          <SectionHeader title="Notes" onClick={seeAllNotes} />
          <div className="flex h-[144px] items-center">
            <div className="flex-1 self-center text-center">
              -- No Notes yet --
            </div>
          </div>
        </div>
        <div className="flex-1">
          <SectionHeader title="Tasks" onClick={seeAllTasks} />
          <div className="h-[240px] flex flex-col">
            <div className="flex w-fill flex-1 items-center">
              <div className="flex-1 text-center">-- No Tasks yet --</div>
            </div>
          </div>
        </div>
      </div>
    </TabContent>
  );
}
