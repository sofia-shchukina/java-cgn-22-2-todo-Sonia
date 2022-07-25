import {Todo} from "../model/Todo";
import TodoCard from "./TodoCard";


type BoardProps = {
    title: string,
    todos: Todo[],
    advanceTodo: (todo: Todo) => void,
    deleteTodo: (id: string) => void
}

export default function Board(props: BoardProps) {

    return (
        <div>
            <p>{props.title}</p>
            {props.todos.map((currentTodo) => <TodoCard todo={currentTodo}
                                                        advanceTodo={props.advanceTodo}
                                                        deleteTodo={props.deleteTodo}/>)}
        </div>
    )
}
