// TurnIndicator.js
import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";

const TurnIndicator = () => {
  const { currentTurn, setCurrentTurn } = useContext(GameContext);

  return (
    <div className="turn-indicator">
      <button onClick={() => setCurrentTurn("Player")}>Player Turn</button>
      <button onClick={() => setCurrentTurn("Opponent")}>Opponent Turn</button>
      <p>Current Turn: {currentTurn}</p>
    </div>
  );
};

export default TurnIndicator;
