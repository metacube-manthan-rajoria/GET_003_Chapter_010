import "./Task.css"
import ITask from "../../assets/ITask"

const Task = (props: any) => {
	let noteData = props.taskMetaData;

	let borderClass = "priority-none";
	switch(noteData.priority){
		case "highest":
			borderClass = "priority-highest";
			break;
		case "high":
			borderClass = "priority-high";
			break;
		case "normal":
			borderClass = "priority-normal";
			break;
		case "low":
			borderClass = "priority-low";
			break;
		case "lowest":
			borderClass = "priority-lowest";
			break;
		default:
			borderClass = "priority-none";
			break;
	}

	return (
		<div className={"note " + borderClass}>
			<cite>{noteData.title??""}</cite>
			<span></span>
			<p>{noteData.note??"null"}</p>
		</div>
	)
}

export default Task