import { useRef, useState } from "react";
import { BottomNavigation } from "./Common/components/BottomNavigation";
import { Topbar } from "./Common/components/Topbar";
import { AppStateProvider } from "./Common/store";
import { Tasks } from "./Tasks";
import { Notes } from "./Notes";
import { About } from "./About";
import { Home } from "./Home";
import { tabIndices, themeOptions } from "./Common/utils/constants";

export function App() {
  const containerRef = useRef(null);
  const touchStartXRef = useRef({ x: -1, y: -1 });

  const [theme, setTheme] = useState(themeOptions.light);
  const [swipeEnabled, setSwipeEnabled] = useState(true);
  const [activeTab, setActiveTab] = useState(tabIndices.home);

  const updateActiveTabWithScroll = (tab) => {
    if (typeof tab === "function") {
      tab = tab(activeTab);
    }
    setActiveTab(tab);
    if (!containerRef.current) return;
    containerRef.current.scrollTo({
      left: tab * window.innerWidth,
      behavior: "smooth",
    });
  };

  const handleSwipe = (direction) => {
    if (direction === "left") {
      updateActiveTabWithScroll((prevTab) => (prevTab + 1) % 4);
    } else {
      updateActiveTabWithScroll((prevTab) => (prevTab + 3) % 4);
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

  console.log("activeTab ==> ", activeTab);

  return (
    <AppStateProvider
      value={{
        activeTab,
        setActiveTab: updateActiveTabWithScroll,
        theme,
        setTheme,
        swipeEnabled,
        setSwipeEnabled,
      }}
    >
      <div className="relative">
        <Topbar />
        <div
          ref={containerRef}
          className="w-full h-full bg-gray-100 flex overflow-hidden pt-[72px] pb-24 relative"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <Home />
          <Tasks />
          <Notes />
          <About />
        </div>
        <BottomNavigation />
      </div>
    </AppStateProvider>
  );
}
