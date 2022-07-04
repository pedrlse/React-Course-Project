import React from "react";
import reactlogo from "../airbnb-logo.png";
import css from "../style.css";

export default function Navbar() {
    return (
        <nav>
            <img src= {reactlogo} className="nav--logo"/>
        </nav>
    )
}
