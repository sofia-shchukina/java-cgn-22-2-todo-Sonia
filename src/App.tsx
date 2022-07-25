import React, {useEffect, useState} from 'react';
import './App.css';
import {Todo} from "./model/Todo";
import BoardOverview from "./components/BoardOverview";
import axios from "axios";
import AddTodo from "./components/AddTodo";

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

  return (
    <div>
        <BoardOverview todos={todos}/>
        <AddTodo  addTodo={addTodo}/>
    </div>
  );
}

export default App;
