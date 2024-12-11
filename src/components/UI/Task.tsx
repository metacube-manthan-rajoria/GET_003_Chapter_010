import "./Task.css"
import ITask from "../../assets/ITask"

const Task = (props: any) => {
	let noteData = props.noteMetaData;

	return (
		<div className="note">
			<span>{noteData.title??"null"}</span>
			<span>{noteData.note??"null"}</span>
			<span>{noteData.status??"null"}</span>
			<span>{noteData.priority??"null"}</span>
		</div>
	)
}

export default Task