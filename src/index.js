import React from "react"
import ReactDOM from "react-dom"
import logo from "./react-logo.svg"

function Header() {
    return(
        <header>
            <nav>
                <img src={logo} width = "100px"/>
            </nav>
        </header>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <Footer />
        </div>
    )
}

function Footer() {
    return (
        <footer>
            <small>© 2021 Pedro Mota development. All rights reserved.</small>
        </footer>
    )
}

            <h1>Fun Facts about React</h1>
            <ol>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>has well over 100k stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ol>
        </div>
    )
}

console.log(<Page />)

ReactDOM.render(
    <Page />,
    document.getElementById("root")) // ReactDOM.append would result in printing DOM elements that are not real
