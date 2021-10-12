import createPersistedState from "use-persisted-state";

const useIsFabOpenState = createPersistedState("isFabOpen");

const useIsFabOpen = (initialToggleState = false) => {
  const [isFabOpen, setIsFabOpenState] = useIsFabOpenState(
    initialToggleState
  );

  return {
    isFabOpen,
    toggleIsFabOpenHandler: () => {
        setIsFabOpenState(!isFabOpen);
    }
  };
};

export default useIsFabOpen;
