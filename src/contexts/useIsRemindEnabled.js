import createPersistedState from "use-persisted-state";
const useRemindIsEnabledState = createPersistedState("remindIsEnabled");

function useIsRemindEnabled() {
  const [remindIsEnabled, setRemindIsEnabled] = useRemindIsEnabledState(false);

  return {
    remindIsEnabled,
    setRemindIsEnabledHandler: () => {
      console.log(remindIsEnabled);
      setRemindIsEnabled((remindIsEnabled) => !remindIsEnabled);
    },
    resetRemindIsEnabledHandler: () => {
      setRemindIsEnabled(() => false);
    },
  };
}

export default useIsRemindEnabled;
