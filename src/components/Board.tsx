import {Todo} from "../model/Todo";
import TodoCard from "./TodoCard";
import "./Board.css"

type BoardProps = {
    title: string,
    todos: Todo[],
    advanceTodo: (todo: Todo) => void,
    deleteTodo: (id: string) => void
}

export default function Board(props: BoardProps) {

    return (
        <div className="board">
            <p className="boardTitle">{props.title}</p>
            <p className="cardElements">{props.todos.map((currentTodo) => <TodoCard todo={currentTodo}
                                                        advanceTodo={props.advanceTodo}
                                                                                    deleteTodo={props.deleteTodo}/>)}</p>
        </div>
    )
}
