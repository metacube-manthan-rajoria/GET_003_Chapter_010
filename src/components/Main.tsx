import TaskBoard from "./UI/TaskBoard"

const Main = () => {
  return (
    <main>
        <div id="task_board_wrapper">
            <TaskBoard></TaskBoard>
            <TaskBoard></TaskBoard>
            <TaskBoard></TaskBoard>
        </div>
    </main>
  )
}

export default Main