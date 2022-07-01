import React from "react";
import css from "./index.css"
import Navbar from "./Navbar";
import Footer from "./Footer";
import MainContent from "./MainContent";

export default function App() {
  return (
    <div>
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}

console.log(<App />);
