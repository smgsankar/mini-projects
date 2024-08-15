import { TabContent } from "../Common/components/TabContent";

export function Home({ active }) {
  if (!active) return <TabContent />;
  return <TabContent>Test Home</TabContent>;
}
