import React, { useEffect, useState } from "react";
import Main from "./components/Main";
import Home from "./components/Home";

export default function App() {
    const [buttonClicked, setButtonClicked] = useState(false)
    const handleLogin = () => {
        setButtonClicked(true)
    }

    return (
        <div>
            <main>
                {
                    !buttonClicked
                        ?
                        <Home handleLogin={handleLogin} />
                        :
                        <div>
                            <Main />
                        </div>
                }
            </main>
        </div>
    )
}
