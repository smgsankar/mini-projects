import { createContext, useContext } from "react";

export const AppStateContext = createContext({
  activeTab: 0,
  setActiveTab: () => { },
  theme: "light",
  setTheme: () => { },
  swipeEnabled: true,
  setSwipeEnabled: () => { },
});

export const AppStateProvider = AppStateContext.Provider;

export function useAppState() {
  return useContext(AppStateContext);
}
