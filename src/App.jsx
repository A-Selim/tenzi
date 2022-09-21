import React from "react";
import Header from "./components/Header";
import Die from "./components/Die";
import RollButton from "./components/RollButton";

export default function App() {
  const [dice, setDice] = React.useState(createAllDice());

  function createAllDice() {
    const diceArr = [];
    for (let i = 0; i < 10; i++) {
      diceArr.push(<Die />);
    }
    return diceArr;
  }

  return (
    <main>
      <div className="game-container">
        <Header />
        <div className="dice-container">{dice}</div>
        <RollButton />
      </div>
    </main>
  );
}
