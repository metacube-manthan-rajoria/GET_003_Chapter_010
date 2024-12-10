import "./Header.css"
import { useState } from "react";
import NewTaskDropdown from "../UI/NewTaskDropdown";

const Header = () => {
	let mouseDownAnimation = (e: Event) => {
		(e.target as HTMLElement).style.scale = "0.98";
	}
	let mouseUpAnimation = (e: Event) => {
		(e.target as HTMLElement).style.scale = "1";
	}

	let [newTaskDialogVisible, setNewTaskDialogVisible] = useState(false);
	let addTaskToList = (title:string) => {
		console.log(title)
		setNewTaskDialogVisible(false)
	}
	let newTaskCancel = () => {
		setNewTaskDialogVisible(false)
	}

	return (
		<header>
			<h1>
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
