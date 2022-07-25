import {Todo} from "../model/Todo";
import TodoCard from "./TodoCard";
import Board from "./Board";


type BoardOverviewProps = {
    todos: Todo[]
}

export default function BoardOverview(props: BoardOverviewProps) {

    const openTodos: Todo[] = props.todos.filter((currentTodo) => currentTodo.status === "OPEN")
    const inProgressTodos: Todo[] = props.todos.filter((currentTodo) => currentTodo.status === "IN_PROGRESS")
    const doneTodos: Todo[] = props.todos.filter((currentTodo) => currentTodo.status === "DONE")

    return (
        <div>
            <Board todos={openTodos}/>
            <Board todos={inProgressTodos}/>
            <Board todos={doneTodos}/>
        </div>
    )
}
