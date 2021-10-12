import createPersistedState from "use-persisted-state";

const useIsAutoScrapeState = createPersistedState("isAutoScrape");

const useIsAutoScrape = (initialToggleState = false) => {
  const [isAutoScrape, setIsAutoScrapeState] = useIsAutoScrapeState(
    initialToggleState
  );

  return {
    isAutoScrape,
    toggleIsAutoScrapeHandler: () => {
        setIsAutoScrapeState(!isAutoScrape);
    }
  };
};

export default useIsAutoScrape;
