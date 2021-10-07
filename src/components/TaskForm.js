import { useContext } from "react";
import TasksStateContext from "../contexts/TaskContext";
import FormLayout from "../layout/FormLayout";
import TextInput from "../ui/TextInput";

function TaskForm() {
  const { taskName, remindIsEnabled, setTaskName, setRemindIsEnabled } =
    useContext(TasksStateContext);

  return (
    <FormLayout className="valign-wrapper">
      <TextInput
        colSize="s8"
        placeholder="Do this..."
        name="Task Name"
        value={taskName}
        onChange={setTaskName}
      />
      <p className="col s4">
        <label
          style={{
            verticalAlign: "-webkit-baseline-middle",
          }}
        >
          <input
            onChange={setRemindIsEnabled}
            type="checkbox"
            checked={remindIsEnabled}
          />
          <span>Remind Me</span>
        </label>
      </p>
    </FormLayout>
  );
}

export default TaskForm;
