import React, { useEffect, useState } from "react";
import Main from "./components/Main";

export default function App() {
    const [buttonClicked, setButtonClicked] = useState(false)
    const handleLogin = () => {
        setButtonClicked(true)
    }
    if (!buttonClicked) {
        return (
            <>
                <main>
                    {
                        <div>
                            <h1 className="home--title">Quizzical</h1>
                            <h3 className="home--subtitle">Some description if needed</h3>
                            <button
                                className="home--button"
                                onClick={handleLogin}
                            >
                                Start quiz
                            </button>
                        </div>
                    }
                </main>
            </>
        )
    } else {
        return (
            <>
                {<Main />}
            </>
        )
    }
}
