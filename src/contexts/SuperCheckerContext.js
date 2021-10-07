import { createContext } from "react";
import useMinuteMarkReload from "../persisted-states/useMinuteMarkReload";
import useMinuteMarkScrape from "../persisted-states/useMinuteMarkScrape";
import useMinuteMarkReset from "../persisted-states/useMinuteMarkReset";

const SuperCheckerContext = createContext({
  currentIntervalID: 0,
  minuteMarkReload: [],
  updateMinuteMarkReload: (array) => {},
  resetMinuteMarkReload: () => {},
  minuteMarkScrape: [],
  updateMinuteMarkScrape: (array) => {},
  resetMinuteMarkScrape: () => {},
  minuteMarkResetFlag: [],
  updateMinuteMarkReset: (array) => {},
  resetMinuteMarkReset: () => {},
});

export function SuperCheckerContextProvider({ children }) {
  const {
    minuteMarkReload,
    updateMinuteMarkReloadHandler,
    resetMinuteMarkReloadHandler,
  } = useMinuteMarkReload([5, 7, 15, 17, 25, 27, 35, 37, 45, 47, 55, 57]);

  const {
    minuteMarkScrape,
    updateMinuteMarkScrapeHandler,
    resetMinuteMarkScrapeHandler,
  } = useMinuteMarkScrape([6, 8, 16, 18, 26, 28, 36, 38, 46, 48, 56, 58]);
  const {
    minuteMarkReset,
    updateMinuteMarkResetHandler,
    resetMinuteMarkResetHandler,
  } = useMinuteMarkReset([4, 14, 24, 34, 44, 54]);

  const context = {
    minuteMarkReload,
    updateMinuteMarkReload: updateMinuteMarkReloadHandler,
    resetMinuteMarkReload: resetMinuteMarkReloadHandler,
    minuteMarkScrape,
    updateMinuteMarkScrape: updateMinuteMarkScrapeHandler,
    resetMinuteMarkScrape: resetMinuteMarkScrapeHandler,
    minuteMarkReset,
    updateMinuteMarkReset: updateMinuteMarkResetHandler,
    resetMinuteMarkReset: resetMinuteMarkResetHandler,
  };

  return (
    <SuperCheckerContext.Provider value={context}>
      {children}
    </SuperCheckerContext.Provider>
  );
}

export default SuperCheckerContext;
