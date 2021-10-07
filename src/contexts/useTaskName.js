import createPersistedState from "use-persisted-state";
const useTaskNameState = createPersistedState("taskName");

function useTaskName() {
  const [taskName, setTaskName] = useTaskNameState("");

  return {
    taskName,
    setTaskNameHandler: (e) => setTaskName(e.target.value),
    resetTaskNameHandler: (e) => setTaskName((currentValue) => currentValue = ""),
  };
}

export default useTaskName;
