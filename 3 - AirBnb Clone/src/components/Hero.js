import React from "react";
import herophoto from "../photo-grid.png";

export default function Hero() {
    return (
        <section>
            <img src= {herophoto} className="hero--photo"/>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </section>
    )
}