import "./App.css";
import { useState } from "react";
import ITask from "./assets/ITask";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
	const [tasks, setTasks] : [any, any]= useState([]);

	const addData = (data : ITask) => {
		let newTaskArray = [...tasks, data];
		setTasks(newTaskArray);
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
