import React from "react";
import css from "./style.css"
import logo from "./Logo.png";

export default function App() {
    return (
        <nav>
            <img src={logo} className="navbar--logo"></img>
            <h2>my travel journal.</h2>
        </nav>
    )
}
