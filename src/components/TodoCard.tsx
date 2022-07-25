import {Todo} from "../model/Todo";

type TodoCardProps = {
    todo: Todo,
    advanceTodo: (todo: Todo) => void
}

export default function TodoCard(props: TodoCardProps) {

    return (
        <div>
            {props.todo.description}
            <button onClick={() => props.advanceTodo(props.todo)}>Advance</button>
        </div>
    )
}
