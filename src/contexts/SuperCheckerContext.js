import { createContext, useState, useEffect } from "react";
import useMinuteMarkReload from "../persisted-states/useMinuteMarkReload";
import useMinuteMarkScrape from "../persisted-states/useMinuteMarkScrape";
import useMinuteMarkReset from "../persisted-states/useMinuteMarkReset";
import useIsAutoScrape from "../persisted-states/useIsAutoScrape";

const SuperCheckerContext = createContext({
  intervalID: 0,
  setIntervalID: () => {},
  minuteMarkReload: [],
  updateMinuteMarkReload: (array) => {},
  resetMinuteMarkReload: () => {},
  minuteMarkScrape: [],
  updateMinuteMarkScrape: (array) => {},
  resetMinuteMarkScrape: () => {},
  minuteMarkResetFlag: [],
  updateMinuteMarkReset: (array) => {},
  resetMinuteMarkReset: () => {},
  minuteMarksObject: {},
  setMinuteMarksObject: () => {},
  updateTimemark: () => {},
  useIsAutoScrape: false,
  toggleIsAutoScrape: () => {},
});

export function SuperCheckerContextProvider({ children }) {
  const [intervalID, setIntervalID] = useState(0);

  const {
    minuteMarkReload,
    updateMinuteMarkReloadHandler,
    resetMinuteMarkReloadHandler,
    isReloaded,
    toggleIsReloadedHandler,
    resetIsReloadedHandler,
  } = useMinuteMarkReload([5, 7, 15, 17, 25, 27, 35, 37, 45, 47, 55, 57]);

  const {
    minuteMarkScrape,
    updateMinuteMarkScrapeHandler,
    resetMinuteMarkScrapeHandler,
    isSubmitted,
    toggleIsSubmittedHandler,
    resetIsSubmittedHandler,
  } = useMinuteMarkScrape([6, 8, 16, 18, 26, 28, 36, 38, 46, 48, 56, 58]);
  const {
    minuteMarkReset,
    updateMinuteMarkResetHandler,
    resetMinuteMarkResetHandler,
    isReset,
    resetIsResetHandler,
  } = useMinuteMarkReset([4, 14, 24, 34, 44, 54, 55]);

  const { isAutoScrape, toggleIsAutoScrapeHandler } = useIsAutoScrape(false);

  const [minuteMarksObject, setMinuteMarksObject] = useState({
    reload: "",
    scrape: "",
    resetFlag: "",
  });

  function timeChecker(timesToCheckArray) {
    let currentMinute = new Date().getMinutes();

    return timesToCheckArray.includes(currentMinute);
  }

  function setIntervalHandler(intervalID) {
    return setIntervalID(intervalID);
  }

  function resetIntervalIDHandler(intervalID) {
    clearTimeout(intervalID);
    return setIntervalID(0);
  }

  function setTimeMarksHandler() {
    return setMinuteMarksObject(() => ({
      reload: timeChecker(minuteMarkReload),
      scrape: timeChecker(minuteMarkScrape),
      resetFlag: timeChecker(minuteMarkReset),
    }));
  }

  useEffect(() => {
    return setMinuteMarksObject(() => ({
      reload: timeChecker(minuteMarkReload),
      scrape: timeChecker(minuteMarkScrape),
      resetFlag: timeChecker(minuteMarkReset),
    }));
  }, [minuteMarkReload, minuteMarkScrape, minuteMarkReset]);

  const context = {
    intervalID,
    setIntervalID: setIntervalHandler,
    resetIntervalID: resetIntervalIDHandler,
    minuteMarkReload,
    updateMinuteMarkReload: updateMinuteMarkReloadHandler,
    resetMinuteMarkReload: resetMinuteMarkReloadHandler,
    isReloaded,
    toggleIsReloaded: toggleIsReloadedHandler,
    resetIsReloaded: resetIsReloadedHandler,
    minuteMarkScrape,
    updateMinuteMarkScrape: updateMinuteMarkScrapeHandler,
    resetMinuteMarkScrape: resetMinuteMarkScrapeHandler,
    isSubmitted,
    toggleIsSubmitted: toggleIsSubmittedHandler,
    resetIsSubmitted: resetIsSubmittedHandler,
    minuteMarkReset,
    updateMinuteMarkReset: updateMinuteMarkResetHandler,
    resetMinuteMarkReset: resetMinuteMarkResetHandler,
    isReset,
    resetIsReset: resetIsResetHandler,
    minuteMarksObject,
    setMinuteMarksObject,
    setTimeMarks: setTimeMarksHandler,
    isAutoScrape,
    toggleIsAutoScrape: toggleIsAutoScrapeHandler,
  };

  return (
    <SuperCheckerContext.Provider value={context}>
      {children}
    </SuperCheckerContext.Provider>
  );
}

export default SuperCheckerContext;
