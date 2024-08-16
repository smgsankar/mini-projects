import { useAppState } from "../Common/store";
import { TabContent } from "../Common/components/TabContent";
import { tabIndices } from "../Common/utils/constants";
import { Header } from "./components/Header";

export function About() {
  const { activeTab } = useAppState();

  if (activeTab !== tabIndices.about) return <TabContent />;

  return (
    <TabContent>
      <div className="h-fill w-fill flex flex-col justify-center">
        <Header />
      </div>
    </TabContent>
  );
}
