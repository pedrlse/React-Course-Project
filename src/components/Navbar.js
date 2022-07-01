import React from "react"
import img from "../image.png"
import "../index.css"

export default
function Header() {
    return(
        <nav>
            <img src= {img} className= "nav--image"/>
            <h1>Laura Smith</h1>
            <h2>Frontend Developer</h2>
            <h3>laurasmith.website</h3>
            <button><h1>Email</h1></button>
            <button><h1>LinkedIn</h1></button>
        </nav>
    );
}