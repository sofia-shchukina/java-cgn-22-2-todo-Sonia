import {NavLink} from "react-router-dom";
import "./NavigationBar.css"

export default function NavigationBar() {

    return (
        <nav className={"navigation-bar"}>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/todos/open"}>Open</NavLink>
            <NavLink to={"/todos/in-progress"}>In Progress</NavLink>
            <NavLink to={"/todos/done"}>Done</NavLink>
        </nav>
    )
}