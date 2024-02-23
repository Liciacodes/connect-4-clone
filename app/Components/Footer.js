import React from "react";

import "../Game.css";

const Footer = ({ onNewGameClick, onSugestClick }) => {
  return (
    <div className="footer panel header">
      <button onClick={onNewGameClick}>New Game</button>
      <button onClick={onSugestClick}>Suggest</button>
    </div>
  );
};

export default Footer;
