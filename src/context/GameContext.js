// GameContext.js
import React, { createContext, useState } from "react";
import { skills } from "../data/skills";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [currentPhase, setCurrentPhase] = useState("Combat Phase");
  const [currentTurn, setCurrentTurn] = useState("Player");
  const phases = ["Combat Phase", "Movement Phase", "Shooting Phase"]; // Add all phases of the game as needed

  return (
    <GameContext.Provider
      value={{
        currentPhase,
        setCurrentPhase,
        currentTurn,
        setCurrentTurn,
        phases,
        skills,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
