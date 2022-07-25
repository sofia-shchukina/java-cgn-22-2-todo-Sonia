import React, {useState} from 'react';
import './App.css';
import {Todo} from "./model/Todo";
import BoardOverview from "./components/BoardOverview";

function App() {

  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <div>
        <BoardOverview todos={todos}/>
    </div>
  );
}

export default App;
