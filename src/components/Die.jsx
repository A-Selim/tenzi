import React from "react";

export default function Die(props) {
  return (
    <div className={`die ${props.isHeld && "held"}`} onClick={props.hold}>
      <p className="die-number">{props.value}</p>
    </div>
  );
}
