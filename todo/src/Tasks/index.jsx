import { TabContent } from "../Common/components/TabContent";

export function Tasks({ active }) {
  if (!active) return <TabContent />;
  return <TabContent>Test Tasks</TabContent>;
}
