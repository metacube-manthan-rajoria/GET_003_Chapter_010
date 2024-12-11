import "./TaskBoard.css";
import Task from "./Task";
import ITask from "../../assets/ITask";

const TaskBoard = (props: any) => {
	return (
		<div className="task_board">
			<span className="task_board_type">{props.type}</span>
			<ul className="task_list">
				{
					(props.tasksList as ITask[]).map(
						(task: ITask) => {
							return <Task taskMetaData={task} key={task.key}/>
						}
					)
				}
			</ul>
		</div>
	);
};

export default TaskBoard;
