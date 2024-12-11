import "./App.css";
import { useState } from "react";
import ITask from "./assets/ITask";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
	const localData = localStorage.getItem("GET_003_Chapter_010");
	const sessionData = localData ? JSON.parse(localData) : [];
	
	let [tasks, setTasks]: [any, any] = useState(sessionData);

	let addData = (newNote : ITask) => {
		if(newNote.title === "" && newNote.note === "") return;
		let newTaskArray = [...tasks, newNote];
		setTasks(newTaskArray);

		localStorage.setItem("GET_003_Chapter_010", JSON.stringify(newTaskArray));
	}

	return (
		<>
			<Header addNote={addData}></Header>
			<Main tasks={tasks}></Main>
			<Footer></Footer>
		</>
	);
}

export default App;
