import {ChangeEvent, FormEvent, useState} from "react";
import {Todo} from "../model/Todo";

type AddTodoProps = {
    addTodo: (description: string) => Promise<Todo>
}

export default function AddTodo(props: AddTodoProps) {

    const [description, setDescription] = useState<string>("")

    const onDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value)
    }

    const onTodoSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (!description) {
            console.error("Description must not be empty")
            return
        }

        props.addTodo(description)
            .then(() => setDescription(""))
            .catch(console.error)
    }

    return (
        <form onSubmit={onTodoSubmit}>
            <input onChange={onDescriptionChange} value={description}/>
            <button>Add</button>
        </form>
    )
}
