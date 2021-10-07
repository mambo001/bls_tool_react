import { useContext } from "react";
import TasksStateContext from "../contexts/TaskContext";
import Button from "../ui/Button";
import TaskForm from "./TaskForm";

function Header({ title }) {
  const {
    taskName,
    taskPayload,
    setTask,
    resetTasks,
    resetTaskName,
    resetRemindIsEnabled,
  } = useContext(TasksStateContext);

  function resetTaskHandler() {
    resetTasks();
  }

  function setTaskHandler() {
    setTask(taskPayload);
    resetTaskName();
    resetRemindIsEnabled();
  }

  return (
    <header className="header row">
      <div
        className="col s12 valign-wrapper"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h4>{title}</h4>
        <div>
          <Button
            onClick={resetTaskHandler}
            className="header-actions"
            color="grey darken-2"
            text="Reset"
          />
        </div>
      </div>

      <div className="col s12" style={{ padding: "0 15px" }}>
        <TaskForm />
        <Button
          onClick={setTaskHandler}
          className={`${
            taskName.length === 0 && "disabled"
          } header-actions fullWidth`}
          color="blue darken-2"
          text="Add Task"
        />
      </div>
    </header>
  );
}

export default Header;
