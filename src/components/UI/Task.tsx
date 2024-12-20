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

	let showButtons = noteData.status === "complete" ? false : true;

	let editNoteEvent = () => props.editNote(noteData.key);
	let deleteNoteEvent = () => props.deleteNote(noteData.key);
	let dragStartEvent = (e: any) => e.dataTransfer.setData("taskId", e.target.id);

	return (
		<div id={noteData.key} className={"note " + borderClass} draggable="true" onDragStart={dragStartEvent}>
			<cite>{noteData.title??""}</cite>
			<span>{noteData.date} {noteData.time}</span>
			<p>{noteData.note??"null"}</p>
			<div className="note_buttons ">
				{
					showButtons ? (
						<button className="edit_note" onClick={editNoteEvent}>✒️</button>
					) : ""
				}
				<button className="delete_note" onClick={deleteNoteEvent}>❌</button>
			</div>
		</div>
	)
}

export default Task