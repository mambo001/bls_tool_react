import { createContext } from "react";
import useTasks from "./useTasks";
import useIsRemindEnabled from "./useIsRemindEnabled";
import useTaskName from "./useTaskName";

const TasksStateContext = createContext({
  tasks: [],
  taskName: "",
  remindIsEnabled: false,
  setTask: (object) => {},
  setTaskName: (taskName) => {},
  setRemindIsEnabled: (boolean) => {},
  removeTask: (id) => {},
  resetTasks: () => {},
  resetTaskName: () => {},
  resetRemindIsEnabled: () => {},
  taskPayload: {}
});

// TODO:
// Tasks init inifite loop on render
// useEffect() bug

export function TasksStateContextProvider({ children }) {
  const { tasks, addTaskHandler, removeTaskHandler, resetTasksHandler } =
    useTasks([
      { id: 1, text: "Task 1", reminder: true },
      { id: 2, text: "Task 2", reminder: false },
      { id: 3, text: "Task 3", reminder: true },
      { id: 4, text: "Task 4", reminder: false },
    ]);

  const { taskName, setTaskNameHandler, resetTaskNameHandler } = useTaskName("");

  const { remindIsEnabled, setRemindIsEnabledHandler, resetRemindIsEnabledHandler } =
    useIsRemindEnabled(false);

  const context = {
    tasks,
    taskName,
    remindIsEnabled,
    taskPayload: {
      id: tasks.length + 1,
      text: taskName,
      reminder: remindIsEnabled
    },
    setTask: addTaskHandler,
    removeTask: removeTaskHandler,
    resetTasks: resetTasksHandler,
    setTaskName: setTaskNameHandler,
    resetTaskName: resetTaskNameHandler,
    setRemindIsEnabled: setRemindIsEnabledHandler,
    resetRemindIsEnabled: resetRemindIsEnabledHandler
  };
  return (
    <TasksStateContext.Provider value={context}>
      {children}
    </TasksStateContext.Provider>
  );
}

export default TasksStateContext;
