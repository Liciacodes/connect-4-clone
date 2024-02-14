"use client";
import React from "react";
import "../Game.css";

const onClick = (ev, id) => {
  alert("on click" + id);
};
const GameCircle = ({ id, children, color }) => {
  const style = {
    backgroundColor: color,
  };

  return (
    <div style={style} className="gameCircle" onClick={(ev) => onClick(ev, id)}>
      {children}
    </div>
  );
};

export default GameCircle;
