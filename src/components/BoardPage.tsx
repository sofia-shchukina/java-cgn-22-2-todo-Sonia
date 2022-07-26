import Board from "./Board";
import {Todo} from "../model/Todo";

type BoardPageProps = {
    todos : Todo[]
    status : string
    advanceTodo : (todo:Todo) => void
    deleteTodo: (id: string) => void
}

export default function BoardPage(props : BoardPageProps) {

    const filteredTodos = props.todos.filter(todo => todo.status === props.status)

    return (
        <Board title={props.status} todos={filteredTodos} advanceTodo={props.advanceTodo} deleteTodo={props.deleteTodo}/>
    )
}