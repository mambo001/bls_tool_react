import createPersistedState from "use-persisted-state";

const useMinuteMarkResetState = createPersistedState("minuteMarkReset");
const useIsResetState = createPersistedState("isReset");

const useMinuteMarkReset = (initialMinuteMarkArray) => {
  const [minuteMarkReset, setMinuteMarkReset] = useMinuteMarkResetState(initialMinuteMarkArray);
  const [isReset, setIsReset] = useIsResetState(false);

  return {
    minuteMarkReset,
    updateMinuteMarkResetHandler: (array) => {
      setMinuteMarkReset(() => (array));
    },
    resetMinuteMarkResetHandler: () => setMinuteMarkReset(initialMinuteMarkArray),
    isReset,
    resetIsResetHandler: () => setIsReset(false)
  };
};

export default useMinuteMarkReset;
