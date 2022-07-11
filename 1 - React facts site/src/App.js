import React from "react";
import css from "./index.css"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

export default function App() {
  const [darkMode, setdarkMode] = React.useState(true)
  function toggleDarkMode() {
    setdarkMode(prevMode => !prevMode)
  }
  return (
    <div>
      <Navbar 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode}
      />
      <MainContent darkMode={darkMode}/>
      <Footer darkMode={darkMode}/>
    </div>
  );
}

console.log(<App />);
