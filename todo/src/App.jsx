import { useRef, useState } from "react";
import { BottomNavigation } from "./Common/components/BottomNavigation";
import { Home } from "./Home";
import { Tasks } from "./Tasks";
import { Notes } from "./Notes";
import { About } from "./About";

export function App() {
  const [activeTab, setActiveTab] = useState(0);
  const touchStartXRef = useRef(-1);

  const handleSwipe = (direction) => {
    if (direction === "left") {
      setActiveTab((prevTab) => (prevTab + 1) % 4);
    } else {
      setActiveTab((prevTab) => (prevTab + 3) % 4);
    }
  };

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    touchStartXRef.current = touch.clientX;
  };

  const handleTouchEnd = (e) => {
    const touchStartX = touchStartXRef.current;
    if (touchStartX === -1) return;
    const touch = e.changedTouches[0];
    const touchEndX = touch.clientX;
    const diffX = touchStartX - touchEndX;

    if (diffX > 50) {
      handleSwipe("left");
    } else if (diffX < -50) {
      handleSwipe("right");
    }
    touchStartXRef.current = -1;
  };

  const renderTab = () => {
    switch (activeTab) {
      case 1:
        return <Tasks />;
      case 2:
        return <Notes />;
      case 3:
        return <About />;
      default:
        return <Home />;
    }
  };

  return (
    <div
      className="h-[100dvh] w-[100dvw]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {renderTab()}
      <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
