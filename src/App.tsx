import React from 'react';
import './App.css';
import BoardOverview from "./components/BoardOverview";
import AddTodo from "./components/AddTodo";
import useTodos from "./hooks/useTodos";
import {HashRouter, Route, Routes} from "react-router-dom";
import BoardPage from "./components/BoardPage";
import NavigationBar from "./components/NavigationBar";

function App() {

    const {todos, addTodo, advanceTodo, deleteTodo} = useTodos()

    return (
        <HashRouter>
            <h1>Super Todo App with Routes</h1>
            <NavigationBar/>
            <Routes>
                <Route path={"/"}
                       element={<BoardOverview
                           todos={todos}
                           advanceTodo={advanceTodo}
                           deleteTodo={deleteTodo}/>}/>
                <Route path={"/todos/open"} element={<BoardPage
                    todos={todos}
                    status={"OPEN"}
                    advanceTodo={advanceTodo}
                    deleteTodo={deleteTodo}
                />
                }/>
                <Route path={"/todos/in-progress"} element={<BoardPage
                    todos={todos}
                    status={"IN_PROGRESS"}
                    advanceTodo={advanceTodo}
                    deleteTodo={deleteTodo}
                />
                }/>
                <Route path={"/todos/done"} element={<BoardPage
                    todos={todos}
                    status={"DONE"}
                    advanceTodo={advanceTodo}
                    deleteTodo={deleteTodo}
                />
                }/>
            </Routes>
            <AddTodo addTodo={addTodo}/>
        </HashRouter>

    );
}

export default App;
