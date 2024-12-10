import "./TaskBoard.css";
import Task from "./Task";

const TaskBoard = (props: any) => {
  return (
    <div className="task_board">
      <span className="task_board_type">{props.type}</span>
      <ul className="task_list">
        <Task></Task>
        <Task></Task>
        <Task></Task>
        <Task></Task>
        <Task></Task>
      </ul>
    </div>
  );
};

export default TaskBoard;
