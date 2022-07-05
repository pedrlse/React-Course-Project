import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

console.log(data);
export default function App() {

  const cards = data.map(item => {
    return (
        <Card
          key={item.id} 
          item={item}
        />
    )
  })

  return (
    <div>
      <Navbar />
      <section className="cards--list">
        {cards}
      </section>
    </div>
  )
}
