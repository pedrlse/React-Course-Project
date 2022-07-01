import React from "react";
import logo from "../react-icon-small.png";

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img src={logo} className="nav-logo" />
        <h3>ReactFacts</h3>
        <h4>React Course - Project 1</h4>
      </nav>
    </header>
  );
}
