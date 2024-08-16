import { useAppState } from "../Common/store";
import { TabContent } from "../Common/components/TabContent";
import { tabIndices } from "../Common/utils/constants";

export function Notes() {
  const { activeTab } = useAppState();

  if (activeTab !== tabIndices.notes) return <TabContent />;

  return <TabContent>Test Notes</TabContent>;
}
