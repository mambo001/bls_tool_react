import createPersistedState from "use-persisted-state";

const useTaskState = createPersistedState("tasks");

const useTasks = (initialTasks) => {
  const [tasks, setTasks] = useTaskState(initialTasks);

  return {
    tasks,
    addTaskHandler: (newTask) => {
      console.log({ newTask });
      setTasks((currentTasks) => [...currentTasks, newTask]);
    },
    removeTaskHandler: (id) =>
      setTasks(() => tasks.filter((task) => task.id !== id)),

    resetTasksHandler: () => setTasks([]),
  };
};

export default useTasks;
