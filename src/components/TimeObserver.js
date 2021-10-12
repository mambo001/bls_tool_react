import { useContext, useEffect } from "react";
import SuperCheckerContext from "../contexts/SuperCheckerContext";

function TimeObserver() {
  const {
    intervalID,
    setIntervalID,
    resetIntervalID,
    minuteMarksObject,
    minuteMarkReload,
    isReloaded,
    toggleIsReloaded,
    resetIsReloaded,
    isReset,
    isSubmitted,
    resetIsSubmitted,
    minuteMarkScrape,
    minuteMarkReset,
    setTimeMarks,
    isAutoScrape,
  } = useContext(SuperCheckerContext);

  function initTimeObserver(id) {
    if (id !== 0) resetIntervalID(intervalID);
    const thisIntervalID = setInterval(() => {
      setIntervalID(thisIntervalID);
      setTimeMarks();
    }, 5000);
  }

  useEffect(() => {
    isAutoScrape ? initTimeObserver(intervalID) : resetIntervalID(intervalID);

    return () => {
      resetIntervalID(intervalID);
    };
  }, [minuteMarkReload, minuteMarkScrape, minuteMarkReset, isAutoScrape]);

  useEffect(() => {
    console.log(
      "updated:",
      minuteMarksObject,
      { isReloaded },
      { isSubmitted },
      { isReset }
    );
    if (minuteMarksObject.reload && !isReloaded) {
      toggleIsReloaded();
      document.location.reload();
    }
    if (minuteMarksObject.resetFlag) {
      //reset all flags
      resetIsReloaded();
      resetIsSubmitted();
    }
  }, [minuteMarksObject, minuteMarkReload, minuteMarkScrape, minuteMarkReset]);

  return (
    <div>
      <h4>{intervalID}</h4>
    </div>
  );
}

export default TimeObserver;
