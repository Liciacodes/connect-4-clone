import React from "react";
import "../Game.css";
import {
  GAME_STATE_DRAW,
  GAME_STATE_PLAYING,
  GAME_STATE_WIN,
} from "../Constants";

const Header = ({ currentPlayer, gameState, winPlayer }) => {
  const renderLabel = () => {
    switch (gameState) {
      case GAME_STATE_PLAYING:
        return <div className="center">Player {currentPlayer} Turn</div>;
      case GAME_STATE_WIN:
        return <div className="center">Player {winPlayer} Wins</div>;
      case GAME_STATE_DRAW:
        return <div className="center">Game is a draw!</div>;
      default:
    }
  };
  return (
    <div className="panel header">
      <div className="header-text">{renderLabel()}</div>
    </div>
  );
};

export default Header;
