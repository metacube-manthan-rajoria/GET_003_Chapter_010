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

	return (
		<>
			<Header addNote={addData}></Header>
			<Main tasks={tasks} deleteNote={deleteNote}></Main>
			<Footer></Footer>
		</>
	);
}

export default App;
