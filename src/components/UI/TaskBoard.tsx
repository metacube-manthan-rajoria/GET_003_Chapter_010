import "./TaskBoard.css";
import Task from "./Task";
import ITask from "../../assets/ITask";

const TaskBoard = (props: any) => {
	let editNote = (key: string) => props.emitEditNote(key);
	let deleteNote = (key: string) => props.emitDeleteNote(key);

	let onDrop = (e: any) => {
		e.preventDefault();
        let noteId = e.dataTransfer.getData("taskId");
		let noteNode = document.getElementById(noteId);
		let board = document.getElementById(props.type + "List");
		if(noteNode == null) return;
        board!.appendChild(noteNode);
	}
	
	return (
		<div className="task_board" onDrop={onDrop} onDragOver={(e) => e.preventDefault()}>
			<span className="task_board_type">{props.type}</span>
			<ul id={props.type + "List"} className="task_list">
				{
					(props.tasksList as ITask[]).map(
						(task: ITask) => {
							return <Task taskMetaData={task} key={task.key} editNote={editNote} deleteNote={deleteNote}/>
						}
					)
				}
			</ul>
		</div>
	);
};

export default TaskBoard;
