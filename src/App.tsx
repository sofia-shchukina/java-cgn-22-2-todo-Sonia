import React, {useEffect, useState} from 'react';
import './App.css';
import {Todo} from "./model/Todo";
import BoardOverview from "./components/BoardOverview";
import axios from "axios";
import AddTodo from "./components/AddTodo";
import {getNextStatus} from "./service/todo-service";

function App() {

  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
      getAllTodo()
  }, [])

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

      axios.post("/api/todo", newTodo)
          .then(getAllTodo)
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

  return (
    <div>
        <BoardOverview todos={todos} advanceTodo={advanceTodo} deleteTodo={deleteTodo}/>
        <AddTodo addTodo={addTodo}/>
    </div>
  );
}

export default App;
