import { useState } from "react";
import { BottomNavigation } from "./Common/components/BottomNavigation";
import { Home } from "./Home";
import { Tasks } from "./Tasks";
import { Notes } from "./Notes";
import { About } from "./About";

export function App() {
  const [activeTab, setActiveTab] = useState("home");

  const renderTab = () => {
    switch (activeTab) {
      case "tasks":
        return <Tasks />;
      case "notes":
        return <Notes />;
      case "about":
        return <About />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      {renderTab()}
      <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
