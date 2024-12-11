import "./Main.css"
import TaskBoard from "../UI/TaskBoard"
import ITask from "../../assets/ITask";

const Main = (props: any) => {
    const boardTypes: string[][] = [["New Task", "new"], ["In Progress", "inprogress"], ["Completed", "complete"]];

    let emitDeleteNote = (key: string) => props.deleteNote(key);
    
    return (
        <main>
            <div id="task_board_wrapper">
                {
                    boardTypes.map(
                        (boardType: string[]) => {
                            return <TaskBoard 
                                type={boardType[0]} 
                                key={boardType[0]} 
                                tasksList={(props.tasks as ITask[]).filter(task => task.status === boardType[1])}
                                emitDeleteNote={emitDeleteNote}
                                />
                        }
                    )
                }
            </div>
        </main>
    )
}

export default Main