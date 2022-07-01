import React from "react"
import ReactDOM from "react-dom"
import css from "./index.css"
import Header from "./Header"
import Footer from "./Footer"
import MainContent from "./MainContent"


function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

console.log(<Page />)

ReactDOM.render(
    <Page />,
    document.getElementById("root")) // ReactDOM.append would result in printing DOM elements that are not real
