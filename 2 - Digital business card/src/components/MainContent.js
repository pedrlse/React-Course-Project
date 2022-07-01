import React from "react"
import linkedin from "../linkedin.png"

export default
function MainContent() {
    return(
        <main>
            <h1 className="main--name">Laura Smith</h1>
            <h2 className="main--job">Frontend Developer</h2>
            <h3 className="main--website">laurasmith.website</h3>
            <button className="button--mail"><h1>Email</h1></button>
            <button className="button--linkedin">
                <img src = {linkedin} className="linkedin"></img>
                <h1>LinkedIn</h1>
            </button>
            <h2 className="main--about">About</h2>
            <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            <h2 className="main--interests">Interests</h2>
            <p style={{paddingTop: "100px"}}> Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </main>
    );
}