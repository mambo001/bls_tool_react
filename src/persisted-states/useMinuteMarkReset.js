import createPersistedState from "use-persisted-state";

const useMinuteMarkResetState = createPersistedState("minuteMarkReset");

const useMinuteMarkReset = (initialMinuteMarkArray) => {
  const [minuteMarkReset, setMinuteMarkReset] = useMinuteMarkResetState(initialMinuteMarkArray);

  return {
    minuteMarkReset,
    updateMinuteMarkResetHandler: (array) => {
      setMinuteMarkReset((currentArray) => [
        ...currentArray,
        array,
      ]);
    },
    resetMinuteMarkResetHandler: () => setTasks(initialMinuteMarkArray),
  };
};

export default useMinuteMarkReset;
