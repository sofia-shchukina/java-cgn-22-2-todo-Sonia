import {ChangeEvent, useState} from "react";

type AddTodoProps = {
    addTodo: (description: string) => void
}

export default function AddTodo(props: AddTodoProps) {

    const [description, setDescription] = useState<string>("")

    const onDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value)
    }

    return (
        <div>
            <input onChange={onDescriptionChange} value={description}/>
            <button onClick={() => props.addTodo(description)}>Add</button>
        </div>
    )
}
