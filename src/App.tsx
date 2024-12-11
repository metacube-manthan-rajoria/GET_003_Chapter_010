import "./App.css";
import { useState } from "react";
import ITask from "./assets/ITask";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
	// Initialise data from local storage
	const localData = localStorage.getItem("GET_003_Chapter_010");
	const sessionData = localData ? JSON.parse(localData) : [];
	const [darkMode, setDarkMode] = useState(false);
	
	let [tasks, setTasks]: [any, any] = useState(sessionData);

	let addData = (newNote : ITask) => {
		// Dont add note if both fields empty
		if(newNote.title === "" && newNote.note === "") return;

		let newTaskArray = [...tasks, newNote];
		setTasks(newTaskArray);

		// Save to local storage
		localStorage.setItem("GET_003_Chapter_010", JSON.stringify(newTaskArray));
	}

	let deleteNote = (key: string) => {
		let updatedTaskArray = tasks.filter((task: ITask) => {
			return task.key != key;
		})

		setTasks(updatedTaskArray);
		// Save to local storage
		localStorage.setItem("GET_003_Chapter_010", JSON.stringify(updatedTaskArray));
	}

	// Toggle Mode
	let toggleMode = () => {
		// Reverting Mode
		setDarkMode(!darkMode);

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

	return (
		<>
			<Header addNote={addData} toggleMode={toggleMode}></Header>
			<Main tasks={tasks} deleteNote={deleteNote}></Main>
			<Footer></Footer>
		</>
	);
}

export default App;
