import { useAppState } from "../Common/store";
import { TabContent } from "../Common/components/TabContent";
import { tabIndices } from "../Common/utils/constants";
import { Header } from "./components/Header";
// import { useEffect } from "react";

export function About() {
  const { activeTab } = useAppState();
  // commenting theme related code until color scheme is implemented
  // const { activeTab, theme, setTheme } = useAppState();

  if (activeTab !== tabIndices.about) return <TabContent />;

  // const onLightClick = () => setTheme("light");
  // const onDarkClick = () => setTheme("dark");

  // useEffect(() => {
  //   document.documentElement.classList.remove("light", "dark");
  //   document.documentElement.classList.add(theme);
  // }, [theme]);

  return (
    <TabContent>
      <div className="h-fill w-fill flex flex-col justify-center gap-6">
        <Header />
        {/* <div className="rounded-lg w-fill bg-white shadow-lg">
          <div className="w-fill flex">
            <button
              onClick={onLightClick}
              className={`w-[50%] rounded-l-lg text-center py-2 font-semibold text-lg border-r ${
                theme === "light" ? "bg-accent" : ""
              }`}
            >
              Light
            </button>
            <button
              onClick={onDarkClick}
              className={`w-[50%] rounded-r-lg text-center py-2 font-semibold text-lg ${
                theme === "dark" ? "bg-accent" : ""
              }`}
            >
              Dark
            </button>
          </div>
        </div> */}
      </div>
    </TabContent>
  );
}
