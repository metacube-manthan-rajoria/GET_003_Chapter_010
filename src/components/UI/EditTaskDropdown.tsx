import "./NewTaskDropdown.css"
import { useRef, useState } from "react";

const EditTaskDropdown = (props: any) => {
    let taskTitle = useRef(null);
    let taskNote = useRef(null);
    let taskStatus = useRef(null);
    let taskPriority = useRef(null);
    let taskDate = useRef(null);
    let taskTime = useRef(null);

    let [title, setTitle] = useState(props.data.title);
    let [note, setNote] = useState(props.data.note);
    let [status, setStatus] = useState(props.data.status);
    let [priority, setPriority] = useState(props.data.priority);
    let [date, setDate] = useState(props.data.date);
    let [time, setTime] = useState(props.data.time);

    let save = () => {
        let title = taskTitle.current ? (taskTitle.current as HTMLInputElement).value : "";
        let note = taskNote.current ? (taskNote.current as HTMLInputElement).value : "";
        let status = taskStatus.current ? (taskStatus.current as HTMLInputElement).value : "new";
        let priority = taskPriority.current ? (taskPriority.current as HTMLInputElement).value : "none";
        let date = taskDate.current ? (taskDate.current as HTMLInputElement).value : "";
        let time = taskTime.current ? (taskTime.current as HTMLInputElement).value : "";

        props.saveTask(props.data.key, title, note, status, priority, date, time);
    }

    return (
        <div id="new_task_dialog_bg">
            <form id="new_task_dialog">
                <input 
                    type="text" 
                    name="title" 
                    ref={taskTitle} 
                    id="new_task_title" 
                    className="flat new_task_dialog_element" 
                    placeholder="Note Title" 
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />

                <div id="new_task_dialog_metadata" className="new_task_dialog_element">
                    <input 
                        type="date" 
                        name="new_task_date" 
                        ref={taskDate} 
                        id="" 
                        className="flat" 
                        value={Date.parse(date)}
                        onChange={(e)=>setDate(e.target.value)}
                    />
                    <input 
                        type="time" 
                        name="new_task_time" 
                        ref={taskTime} 
                        id="" 
                        value={time}
                        onChange={(e)=>setTime(e.target.value)}
                    />
                    <select name="" ref={taskStatus} id="" className="flat" value={status} onChange={(e)=>setStatus(e.target.value)}>
                        <option value="new">New</option>
                        <option value="inprogress">In Progress</option>
                        <option value="complete">Completed</option>
                    </select>
                    <select name="" ref={taskPriority} id="" className="flat" value={priority} onChange={(e)=>setPriority(e.target.value)}>
                        <option value="highest">Highest</option>
                        <option value="high">High</option>
                        <option value="normal">Normal</option>
                        <option value="low">Low</option>
                        <option value="lowest">Lowest</option>
                        <option value="none">None</option>
                    </select>
                </div>

                <textarea 
                    name="" 
                    ref={taskNote} 
                    id="new_task_note" 
                    className="flat new_task_dialog_element" 
                    placeholder="Write a note..." 
                    value={note}
                    onChange={(e)=>setNote(e.target.value)}
                ></textarea>

                <div id="new_task_dialog_button_wrapper" className="new_task_dialog_element">
                    <button type="button" id="new_task_cancel_button" className="flat_button" onClick={props.cancelEdit}>Cancel</button>
                    <button type="button" id="new_task_add_button" className="flat_button" onClick={save}>Save</button>
                </div>
            </form>
        </div>
    );
};

export default EditTaskDropdown;
