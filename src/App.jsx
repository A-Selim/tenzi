import React from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import Header from "./components/Header";
import Die from "./components/Die";
import RollButton from "./components/RollButton";

export default function App() {
  const [dice, setDice] = React.useState(createAllDice());
  const [tenzi, setTenzi] = React.useState(false);

  React.useEffect(() => {
    const allDiceHeld = dice.every((die) => die.isHeld);
    const allSameValue = dice.every((die) => dice[0].value === die.value);

    if (allDiceHeld && allSameValue) {
      setTenzi(true);
    }
  }, [dice]);

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
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.isHeld ? die : { ...die, value: getRandomNumber() };
      })
    );
  }

  function holdDie(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  function newGame() {
    setTenzi(false);
    setDice(createAllDice());
  }

  const diceElements = dice.map((die) => (
    <Die key={die.id} value={die.value} isHeld={die.isHeld} hold={() => holdDie(die.id)} />
  ));

  return (
    <main>
      {tenzi && <Confetti numberOfPieces={300} />}
      <div className="game-container">
        <Header playerWon={tenzi} />
        <div className="dice-container">{diceElements}</div>
        <RollButton buttonRole={tenzi ? newGame : rollDice} playerWon={tenzi} />
      </div>
    </main>
  );
}
