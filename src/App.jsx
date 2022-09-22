import React from "react";
import { nanoid } from "nanoid";
import Header from "./components/Header";
import Die from "./components/Die";
import RollButton from "./components/RollButton";

export default function App() {
  const [dice, setDice] = React.useState(createAllDice());

  function createAllDice() {
    const diceArr = [];
    for (let i = 0; i < 10; i++) {
      const die = {
        id: nanoid(),
        value: getRandomNumber(),
        isHeld: false,
      };
      diceArr.push(die);
    }
    return diceArr;
  }

  function getRandomNumber() {
    return Math.ceil(Math.random() * 6);
  }

  function rollDice() {
    setDice(createAllDice());
  }

  const diceElements = dice.map((die) => <Die key={die.id} value={die.value} isHeld={die.isHeld} />);

  return (
    <main>
      <div className="game-container">
        <Header />
        <div className="dice-container">{diceElements}</div>
        <RollButton roll={rollDice} />
      </div>
    </main>
  );
}
