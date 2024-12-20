import "./Header.css"
import { useState } from "react";
import NewTaskDropdown from "../UI/NewTaskDropdown";

const Header = (props: any) => {
	// Toggle Mode
	let toggleModeEvent = () => props.toggleMode();
	// Mouse Animation Effect
	let mouseDownAnimation = (e: Event) => {
		(e.target as HTMLElement).style.scale = "0.98";
	}
	let mouseUpAnimation = (e: Event) => {
		(e.target as HTMLElement).style.scale = "1";
	}

	let [newTaskDialogVisible, setNewTaskDialogVisible] = useState(false);

	// New Task Dialog Add / Cancel Button Functions
	let addTaskToList = (
		title:string,
		note: string,
		status: string,
		priority: string,
		date: string,
		time: string
	) => {
		let key = Date.now().toString();
		props.addNote({
			title, note, date, time, status, priority, key
		});
		setNewTaskDialogVisible(false);
	}
	let newTaskCancel = () => setNewTaskDialogVisible(false);

	return (
		<header>
			<h1 onClick={toggleModeEvent}>
				Kanban 
			</h1>
			<button 
				id="add_task_button" 
				onMouseDown={(e:any)=>{mouseDownAnimation(e)}} 
				onMouseUp={(e:any) => {mouseUpAnimation(e)}}
				onClick={()=>{setNewTaskDialogVisible(true)}}
			>
				Add New Task
			</button>

			{
				newTaskDialogVisible ? <NewTaskDropdown addNewTask={addTaskToList} cancelTask={newTaskCancel}></NewTaskDropdown> : ""
			}
		</header>
	);
};

export default Header;
