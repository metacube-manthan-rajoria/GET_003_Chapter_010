import TaskBoard from "../UI/TaskBoard"

const Main = () => {
    let boardTypes: string[] = ["New Task", "In Progress", "Completed"];
    return (
        <main>
            <div id="task_board_wrapper">
                {boardTypes.map((boardType: string) => { 
                    return <TaskBoard type={boardType} key={boardType}/>
                })}
            </div>
        </main>
    )
}

export default Main