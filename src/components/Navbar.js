import React from "react"
import img from "../image.png"
import "../index.css"

export default
function Header() {
    return(
        <nav>
            <img src= {img} className= "nav--image"/>
            <h1 className="nav--name">Laura Smith</h1>
            <h2 className="nav--job">Frontend Developer</h2>
            <h3 className="nav--website">laurasmith.website</h3>
            <button className="button--mail"><h1>Email</h1></button>
            <button className="button--linkedin"><h1>LinkedIn</h1></button>
        </nav>
    );
}