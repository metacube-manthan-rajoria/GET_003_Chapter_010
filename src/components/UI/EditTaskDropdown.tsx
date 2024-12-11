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
        let note = taskNote.current ? (taskNote.current as HTMLInputElement).value : "";
        let status = taskStatus.current ? (taskStatus.current as HTMLInputElement).value : "new";
        let priority = taskPriority.current ? (taskPriority.current as HTMLInputElement).value : "none";
        let date = taskDate.current ? (taskDate.current as HTMLInputElement).value : "";
        let time = taskTime.current ? (taskTime.current as HTMLInputElement).value : "";

        props.addNewTask(title, note, status, priority, date, time);
    }

    return (
        <div id="new_task_dialog_bg">
            <form id="new_task_dialog">
                <input type="text" name="title" ref={taskTitle} id="new_task_title" className="flat new_task_dialog_element" placeholder="Note Title"/>

                <div id="new_task_dialog_metadata" className="new_task_dialog_element">
                    <input type="date" name="new_task_date" ref={taskDate} id="" className="flat"/>
                    <input type="time" name="new_task_time" ref={taskTime} id="" />
                    <select name="" ref={taskStatus} id="" className="flat">
                        <option value="new">New</option>
                        <option value="inprogress">In Progress</option>
                        <option value="complete">Completed</option>
                    </select>
                    <select name="" ref={taskPriority} id="" className="flat">
                        <option value="highest">Highest</option>
                        <option value="high">High</option>
                        <option value="normal">Normal</option>
                        <option value="low">Low</option>
                        <option value="lowest">Lowest</option>
                        <option value="none">None</option>
                    </select>
                </div>

                <textarea name="" ref={taskNote} id="new_task_note" className="flat new_task_dialog_element" placeholder="Write a note..."></textarea>

                <div id="new_task_dialog_button_wrapper" className="new_task_dialog_element">
                    <button type="button" id="new_task_cancel_button" className="flat_button" onClick={props.cancelTask}>Cancel</button>
                    <button type="button" id="new_task_add_button" className="flat_button" onClick={addTask}>Save</button>
                </div>
            </form>
        </div>
    );
};

export default NewTaskDropdown;
