import React from "react";

export default function Header(props) {
  return (
    <header>
      <h1 className="title">Tenzies</h1>
      {!props.playerWon && (
        <p className="summary-text">
          Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
        </p>
      )}
      {props.playerWon && <h2 className="win-text">🎉🎉 You Won 🎉🎉</h2>}
    </header>
  );
}
