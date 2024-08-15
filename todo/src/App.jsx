import { useEffect, useRef, useState } from "react";
import { BottomNavigation } from "./Common/components/BottomNavigation";
import { Topbar } from "./Common/components/Topbar";
import { Tasks } from "./Tasks";
import { Notes } from "./Notes";
import { About } from "./About";
import { Home } from "./Home";

export function App() {
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const touchStartXRef = useRef({ x: -1, y: -1 });

  const handleSwipe = (direction) => {
    if (direction === "left") {
      setActiveTab((prevTab) => (prevTab + 1) % 4);
    } else {
      setActiveTab((prevTab) => (prevTab + 3) % 4);
    }
  };

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    touchStartXRef.current = {
      x: touch.clientX,
      y: touch.clientY,
    };
  };

  const handleTouchEnd = (e) => {
    const touchStartX = touchStartXRef.current.x;
    const touchStartY = touchStartXRef.current.y;

    if (touchStartX === -1 || touchStartY === -1) return;
    const touch = e.changedTouches[0];
    const touchEndX = touch.clientX;
    const touchEndY = touch.clientY;
    const diffX = touchStartX - touchEndX;
    const diffY = touchStartY - touchEndY;

    if (Math.abs(diffY) > 100) return;

    if (diffX > 50) {
      handleSwipe("left");
    } else if (diffX < -50) {
      handleSwipe("right");
    }

    touchStartXRef.current = {
      x: -1,
      y: -1,
    };
  };

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.scrollTo({
      left: activeTab * window.innerWidth,
      behavior: "smooth",
    });
  }, [activeTab]);

  return (
    <div className="relative">
      <Topbar />
      <div
        ref={containerRef}
        className="w-full h-full bg-gray-100 flex overflow-hidden pt-[72px] pb-24 relative"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <Home active={activeTab === 0} />
        <Tasks active={activeTab === 1} />
        <Notes active={activeTab === 2} />
        <About active={activeTab === 3} />
      </div>
      <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
