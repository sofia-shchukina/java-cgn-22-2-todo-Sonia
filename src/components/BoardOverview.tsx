import {Todo} from "../model/Todo";
import TodoCard from "./TodoCard";


type BoardOverviewProps = {
    todos: Todo[]
}

export default function BoardOverview(props: BoardOverviewProps) {

    return (
        <div>
            {props.todos.map((currentTodo) => <TodoCard todo={currentTodo} />)}
        </div>
    )
}
