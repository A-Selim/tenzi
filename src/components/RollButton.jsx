import React from "react";

export default function RollButton(props) {
  return (
    <button className="btn" onClick={props.buttonRole}>
      {props.playerWon ? "New Game" : "Roll"}
    </button>
  );
}
