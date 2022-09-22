import React from "react";

export default function RollButton(props) {
  return (
    <button className="btn" onClick={props.roll}>
      Roll
    </button>
  );
}
