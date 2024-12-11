import "./Task.css"

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

	let deleteNoteEvent = () => {
		props.deleteNote(noteData.key);
	}

	return (
		<div className={"note " + borderClass}>
			<cite>{noteData.title??""}</cite>
			<span>{noteData.date} {noteData.time}</span>
			<p>{noteData.note??"null"}</p>
			<div className="note_buttons">
				<button className="edit_note">✒️</button> 
				<button className="delete_note" onClick={deleteNoteEvent}>❌</button>
			</div>
		</div>
	)
}

export default Task