import { useContext } from "react";
import TasksStateContext from "../contexts/TaskContext";
import Icon from "../ui/Icon";

function Tasks() {
  const { tasks, removeTask } = useContext(TasksStateContext);

  function removeTaskHandler(id) {
    removeTask(id)
  }


  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h5>Tasks List</h5>
      </li>
      {tasks.map(({ id, text, reminder }) => (
        <li className="collection-item" key={id}>
          {text}

          {!reminder ? (
            <Icon iconName="notifications_off" />
          ) : (
            <Icon iconName="notifications_active" />
          )}
          <a onClick={() => removeTaskHandler(id)} className="secondary-content">
            <Icon iconName="delete" color="red"></Icon>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
