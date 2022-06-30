import React from "react"
import ReactDOM from "react-dom"
import logo from "./react-logo.svg"

// const navbar = (
//     <nav>
//         <h1>Bob's Bistro</h1>
//         <ul>
//             <li>Menu</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )

function displayPage() {
    return (
        <div>
            <img src={logo} width = "100px"/>
            <h1>Fun Facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>has well over 100k stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}

console.log(displayPage())

ReactDOM.render(
    displayPage(),
    document.getElementById("root")) // ReactDOM.append would result in printing DOM elements that are not real
