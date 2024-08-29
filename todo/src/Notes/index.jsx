import { useEffect, useState } from "react";
import { FloatingActionButton } from "../Common/components/FloatingActionButton";
import { TabContent } from "../Common/components/TabContent";
import { tabIndices } from "../Common/utils/constants";
import { useAppState } from "../Common/store";
import { Create } from "./Create";
import { List } from "./List";

export function Notes() {
  const { activeTab } = useAppState();
  const [tabState, setTabState] = useState("list");

  useEffect(() => {
    setTabState("list");
  }, [activeTab]);

  if (activeTab !== tabIndices.notes) return <TabContent />;

  const onCreate = () => setTabState("create");
  const onBack = () => setTabState("list");

  return (
    <TabContent>
      {tabState === "list" && (
        <>
          <List />
          <FloatingActionButton onClick={onCreate} />
        </>
      )}
      {tabState === "create" && <Create onBack={onBack} />}
    </TabContent>
  );
}
