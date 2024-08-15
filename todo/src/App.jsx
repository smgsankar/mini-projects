import { useEffect, useRef, useState } from "react";
import { BottomNavigation } from "./Common/components/BottomNavigation";
import { Home } from "./Home";
import { Tasks } from "./Tasks";
import { Notes } from "./Notes";
import { About } from "./About";

export function App() {
  const containerRef = useRef(null);
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

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.scrollTo({
      left: activeTab * window.innerWidth,
      behavior: "smooth",
    });
  }, [activeTab]);

  return (
    <>
      <div
        ref={containerRef}
        className="w-fill h-fill flex overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <Home active={activeTab === 0} />
        <Tasks active={activeTab === 1} />
        <Notes active={activeTab === 2} />
        <About active={activeTab === 3} />
      </div>
      <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </>
  );
}
