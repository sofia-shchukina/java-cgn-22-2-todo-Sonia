import React from 'react';
import './App.css';
import BoardOverview from "./components/BoardOverview";
import AddTodo from "./components/AddTodo";
import useTodos from "./hooks/useTodos";

function App() {

    const {todos, addTodo, advanceTodo, deleteTodo} = useTodos()

  return (
    <div>
        <BoardOverview todos={todos} advanceTodo={advanceTodo} deleteTodo={deleteTodo}/>
        <AddTodo addTodo={addTodo}/>
    </div>
  );
}

export default App;
