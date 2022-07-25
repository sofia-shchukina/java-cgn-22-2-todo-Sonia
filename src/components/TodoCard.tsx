import {Todo} from "../model/Todo";

type TodoCardProps = {
    todo: Todo
}

export default function TodoCard(props: TodoCardProps) {

    return (
        <div>
            {props.todo.description}
        </div>
    )
}
