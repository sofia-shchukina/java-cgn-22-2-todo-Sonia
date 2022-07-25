import React, {useEffect, useState} from 'react';
import './App.css';
import {Todo} from "./model/Todo";
import BoardOverview from "./components/BoardOverview";
import axios from "axios";

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

  return (
    <div>
        <BoardOverview todos={todos}/>
    </div>
  );
}

export default App;
