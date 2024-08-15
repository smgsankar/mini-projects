import { TabContent } from "../Common/components/TabContent";

export function About({ active }) {
  if (!active) return <TabContent />;
  return <TabContent>Test About</TabContent>;
}
