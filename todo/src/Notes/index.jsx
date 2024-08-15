import { TabContent } from "../Common/components/TabContent";

export function Notes({ active }) {
  if (!active) return <TabContent />;
  return <TabContent>Test Notes</TabContent>;
}
