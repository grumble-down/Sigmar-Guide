// SkillList.js
import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";
import SkillCard from "./SkillCard";

const SkillList = () => {
  const { currentPhase, currentTurn, skills } = useContext(GameContext);

  // Filter skills based on the current phase and turn
  const filteredSkills = skills.filter(
    (skill) =>
      skill.phase === currentPhase && (skill.turn === currentTurn || skill.turn === "Both")
  );

  return (
    <div className="skill-list">
      {filteredSkills.map((skill) => (
        <SkillCard key={skill.id} skill={skill} />
      ))}
    </div>
  );
};

export default SkillList;
