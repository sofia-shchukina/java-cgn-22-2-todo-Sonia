import {Todo} from "../model/Todo";

type TodoCardProps = {
    todo: Todo,
    advanceTodo: (todo: Todo) => void,
    deleteTodo: (id: string) => void
}

export default function TodoCard(props: TodoCardProps) {

    return (
        <div>
            {props.todo.description}
            <button onClick={() => props.advanceTodo(props.todo)}>Advance</button>
            <button onClick={() => props.deleteTodo(props.todo.id)}>Delete</button>
        </div>
    )
}
