import createPersistedState from "use-persisted-state";

const useMinuteMarkReloadState = createPersistedState("minuteMarkReload");
const useIsReloadedState = createPersistedState("isReloaded");

const useMinuteMarkReload = (initialMinuteMarkArray) => {
  const [minuteMarkReload, setMinuteMarkReload] = useMinuteMarkReloadState(
    initialMinuteMarkArray
  );

  const [isReloaded, setIsReloaded] = useIsReloadedState(false);

  return {
    minuteMarkReload,
    updateMinuteMarkReloadHandler: (array) => {
      setMinuteMarkReload(array);
    },
    resetMinuteMarkReloadHandler: () => {
      setMinuteMarkReload(initialMinuteMarkArray);
    },
    isReloaded,
    toggleIsReloadedHandler: () => {
      setIsReloaded(!isReloaded);
    },
    resetIsReloadedHandler: () => {
      setIsReloaded(false)
    }
  };
};

export default useMinuteMarkReload;
