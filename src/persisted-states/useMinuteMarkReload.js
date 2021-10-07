import createPersistedState from "use-persisted-state";

const useMinuteMarkReloadState = createPersistedState("minuteMarkReload");

const useMinuteMarkReload = (initialMinuteMarkArray) => {
  const [minuteMarkReload, setMinuteMarkReload] = useMinuteMarkReloadState(initialMinuteMarkArray);

  return {
    minuteMarkReload,
    updateMinuteMarkReloadHandler: (array) => {
      setMinuteMarkReload((currentArray) => [
        ...currentArray,
        array,
      ]);
    },
    resetMinuteMarkReloadHandler: () => setTasks(initialMinuteMarkArray),
  };
};

export default useMinuteMarkReload;
