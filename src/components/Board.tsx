import {Todo} from "../model/Todo";
import TodoCard from "./TodoCard";


type BoardProps = {
    todos: Todo[]
}

export default function Board(props: BoardProps) {

    return (
        <div>
            {props.todos.map((currentTodo) => <TodoCard todo={currentTodo} />)}
        </div>
    )
}
