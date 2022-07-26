import {useEffect, useState} from "react";
import {Todo} from "../model/Todo";
import axios from "axios";
import {getNextStatus} from "../service/todo-service";

export default function useTodos() {

    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        getAllTodo()
    },  [])

    const getAllTodo = () => {
        axios.get("/api/todo")
            .then((response) => response.data)
            .then(setTodos)
    }

    const addTodo = (description: string) => {
        const newTodo = {
            description: description,
            status: "OPEN"
        }

        return axios.post<Todo>("/api/todo", newTodo)
            .then((response) => {
                getAllTodo()
                return response.data
            })
    }

    const advanceTodo = (todo: Todo) => {
        const updatedTodo = {
            id: todo.id,
            description: todo.description,
            status: getNextStatus(todo.status)
        }

        axios.put(`/api/todo/${todo.id}`, updatedTodo)
            .then(getAllTodo)
    }

    const deleteTodo = (id: string) => {
        axios.delete(`/api/todo/${id}`)
            .then(getAllTodo)
    }

    return {todos, addTodo, advanceTodo, deleteTodo}
}
