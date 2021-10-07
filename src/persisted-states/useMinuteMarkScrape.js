import createPersistedState from "use-persisted-state";

const useMinuteMarkScrapeState = createPersistedState("minuteMarkScrape");

const useMinuteMarkScrape = (initialMinuteMarkArray) => {
  const [minuteMarkScrape, setMinuteMarkScrape] = useMinuteMarkScrapeState(initialMinuteMarkArray);

  return {
    minuteMarkScrape,
    updateMinuteMarkScrapeHandler: (array) => {
      setMinuteMarkScrape((currentArray) => [
        ...currentArray,
        array,
      ]);
    },
    resetMinuteMarkScrapeHandler: () => setTasks(initialMinuteMarkArray),
  };
};

export default useMinuteMarkScrape;
