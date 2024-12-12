import "./App.css";
import { useState } from "react";
import ITask from "./assets/ITask";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import EditTaskDropdown from "./components/UI/EditTaskDropdown";

function App() {
	// Initialise data from local storage
	const localData = localStorage.getItem("GET_003_Chapter_010");
	const sessionData = localData ? JSON.parse(localData) : [];

	let [darkMode, setDarkMode] = useState(false);
	let [tasks, setTasks]: [any, any] = useState(sessionData);
	let [editTaskDialogVisible, setEditTaskDialogVisible] = useState(false);

	// Add, Edit and Delete Functions
	let addData = (newNote : ITask) => {
		// Dont add note if both fields empty
		if(newNote.title === "" && newNote.note === "") return;

		let newTaskArray = [...tasks, newNote];
		setTasks(newTaskArray);

		// Save to local storage
		localStorage.setItem("GET_003_Chapter_010", JSON.stringify(newTaskArray));
	}

	let [taskToEdit, setTaskToEdit] = useState({});
	let editNote = (key: string) => {
		let selectedTask = tasks.filter((task: ITask) => {
			return task.key === key;
		})[0];

		setTaskToEdit(selectedTask);
		setEditTaskDialogVisible(true);
	}

	let deleteNote = (key: string) => {
		let updatedTaskArray = tasks.filter((task: ITask) => {
			return task.key != key;
		})

		setTasks(updatedTaskArray);
		// Save to local storage
		localStorage.setItem("GET_003_Chapter_010", JSON.stringify(updatedTaskArray));
	}

	// Edit Dialog Functions
	let saveTaskToList = (
		key: string, 
		title: string, 
		note: string, 
		status: string, 
		priority: string, 
		date: string, 
		time: string
	) => {
		let selectedTask = tasks.filter((task: ITask) => {
			if(task.key == key){
				task.time = title;
			}
		})[0];
		setEditTaskDialogVisible(false);
	}
	let cancelEdit = () => setEditTaskDialogVisible(false);

	// Toggle Mode
	let changeTheme = () => {
		let rootStyle: HTMLElement | null = document.querySelector(":root");
		if(rootStyle == null) return;

		if(!darkMode){
			rootStyle.style.setProperty("--border-dev", "1px solid white");
			rootStyle.style.setProperty("--button-color", "white");
			rootStyle.style.setProperty("--button-bgcolor", "black");
			rootStyle.style.setProperty("--bg-color", "black");
			rootStyle.style.setProperty("--text-color", "white");
		}else{
			rootStyle.style.setProperty("--border-dev", "1px solid black");
			rootStyle.style.setProperty("--button-color", "black");
			rootStyle.style.setProperty("--button-bgcolor", "white");
			rootStyle.style.setProperty("--bg-color", "white");
			rootStyle.style.setProperty("--text-color", "black");
		}
	}

	let toggleMode = () => {
		// Reverting Mode
		setDarkMode(!darkMode);
		changeTheme();
	}

	return (
		<>
			{
				editTaskDialogVisible ? <EditTaskDropdown data={taskToEdit} saveTask={saveTaskToList} cancelEdit={cancelEdit}></EditTaskDropdown> : ""
			}
			<Header addNote={addData} toggleMode={toggleMode}></Header>
			<Main tasks={tasks} editNote={editNote} deleteNote={deleteNote}></Main>
			<Footer></Footer>
		</>
	);
}

export default App;
