import "./NewTaskDropdown.css"
import { useRef } from "react";

const NewTaskDropdown = (props: any) => {
    let taskTitle = useRef(null);
    let taskNote = useRef(null);
    let taskStatus = useRef(null);
    let taskPriority = useRef(null);
    let taskDate = useRef(null);
    let taskTime = useRef(null);

    let addTask = () => {
        let title = taskTitle.current ? (taskTitle.current as HTMLInputElement).value : "";
        let note = taskTitle.current ? (taskTitle.current as HTMLInputElement).value : "";
        let status = taskTitle.current ? (taskTitle.current as HTMLInputElement).value : "";
        let priority = taskTitle.current ? (taskTitle.current as HTMLInputElement).value : "";
        let date = taskTitle.current ? (taskTitle.current as HTMLInputElement).value : "";
        let time = taskTitle.current ? (taskTitle.current as HTMLInputElement).value : "";
        props.addNewTask(title);
    }

    return (
        <div id="new_task_dialog_bg">
            <form id="new_task_dialog">
                <input type="text" name="title" ref={taskTitle} id="new_task_title" className="flat new_task_dialog_element" placeholder="Note Title"/>

                <div id="new_task_dialog_metadata" className="new_task_dialog_element">
                    <input type="date" name="new_task_date" ref={taskDate} id="" className="flat"/>
                    <input type="time" name="new_task_time" ref={taskTime} id="" />
                    <select name="" ref={taskStatus} id="" className="flat">
                        <option value="">New</option>
                        <option value="">In Progress</option>
                        <option value="">Completed</option>
                    </select>
                    <select name="" ref={taskPriority} id="" className="flat">
                        <option value="">Highest</option>
                        <option value="">High</option>
                        <option value="">Normal</option>
                        <option value="">Low</option>
                        <option value="">Lowest</option>
                        <option value="">None</option>
                    </select>
                </div>

                <textarea name="" ref={taskNote} id="new_task_note" className="flat new_task_dialog_element" placeholder="Write a note..."></textarea>

                <div id="new_task_dialog_button_wrapper" className="new_task_dialog_element">
                    <button type="button" id="new_task_cancel_button" className="flat_button" onClick={props.cancelTask}>Cancel</button>
                    <button type="button" id="new_task_add_button" className="flat_button" onClick={addTask}>Add</button>
                </div>
            </form>
        </div>
    );
};

export default NewTaskDropdown;
