import createPersistedState from "use-persisted-state";

const useMinuteMarkScrapeState = createPersistedState("minuteMarkScrape");
const useIsSubmittedState = createPersistedState("isSubmitted");

const useMinuteMarkScrape = (initialMinuteMarkArray) => {
  const [minuteMarkScrape, setMinuteMarkScrape] = useMinuteMarkScrapeState(
    initialMinuteMarkArray
  );
  const [isSubmitted, setIsSubmitted] = useIsSubmittedState(false);

  return {
    minuteMarkScrape,
    updateMinuteMarkScrapeHandler: (array) => {
      setMinuteMarkScrape(() => array);
    },
    resetMinuteMarkScrapeHandler: () =>
      setMinuteMarkScrape(initialMinuteMarkArray),
    isSubmitted,
    toggleIsSubmittedHandler: () => {
      setIsSubmitted(!isSubmitted)
    },
    resetIsSubmittedHandler: () => {
      setIsSubmitted(false)
    }
  };
};

export default useMinuteMarkScrape;
