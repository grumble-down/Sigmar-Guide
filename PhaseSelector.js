// PhaseSelector.js
import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";

const PhaseSelector = () => {
  const { phases, setCurrentPhase } = useContext(GameContext);

  return (
    <select onChange={(e) => setCurrentPhase(e.target.value)}>
      {phases.map((phase) => (
        <option key={phase} value={phase}>
          {phase}
        </option>
      ))}
    </select>
  );
};

export default PhaseSelector;
