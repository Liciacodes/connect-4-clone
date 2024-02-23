import React from "react";
import { GAME_STATE_PLAYING } from "../Constants";

import "../Game.css";

const Footer = ({ onNewGameClick, onSugestClick, gameState }) => {
  const renderButtons = () => {
    if (gameState === GAME_STATE_PLAYING) {
      return <button onClick={onSugestClick}>Suggest</button>;
    }

    return <button onClick={onNewGameClick}>New Game</button>;
  };
  return <div className="footer panel header">{renderButtons()}</div>;
};

export default Footer;
