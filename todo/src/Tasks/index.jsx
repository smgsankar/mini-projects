import { useAppState } from "../Common/store";
import { TabContent } from "../Common/components/TabContent";
import { tabIndices } from "../Common/utils/constants";

export function Tasks() {
  const { activeTab } = useAppState();

  if (activeTab !== tabIndices.tasks) return <TabContent />;

  return <TabContent>Test Tasks</TabContent>;
}
