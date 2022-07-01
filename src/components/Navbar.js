import React from "react"
import img from "../image.png"
import "../index.css"

export default
function Header() {
    return(
        <nav>
            <img src= {img} className= "nav--image"/>
        </nav>
    );
}