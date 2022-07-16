import React from 'react'

export default function Home(props) {
    return (
        <div>
            <h1 className='home--title'>Quizzical</h1>
            <h2 className='home--subtitle'>Some description if needed</h2>
            <button className='home--button' onClick={props.handleLogin}>Start Quiz</button>
        </div>
    )
}
