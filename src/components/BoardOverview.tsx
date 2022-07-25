import {Todo} from "../model/Todo";
import TodoCard from "./TodoCard";
import Board from "./Board";


type BoardOverviewProps = {
    todos: Todo[],
    advanceTodo: (todo: Todo) => void
}

export default function BoardOverview(props: BoardOverviewProps) {

    const openTodos: Todo[] = props.todos.filter((currentTodo) => currentTodo.status === "OPEN")
    const inProgressTodos: Todo[] = props.todos.filter((currentTodo) => currentTodo.status === "IN_PROGRESS")
    const doneTodos: Todo[] = props.todos.filter((currentTodo) => currentTodo.status === "DONE")

    return (
        <div>
            <Board todos={openTodos} advanceTodo={props.advanceTodo}/>
            <Board todos={inProgressTodos} advanceTodo={props.advanceTodo}/>
            <Board todos={doneTodos} advanceTodo={props.advanceTodo}/>
        </div>
    )
}
