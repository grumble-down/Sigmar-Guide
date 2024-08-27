// skills.js
export const skills = [
  {
    id: 1,
    name: "Strike First",
    description: "This unit attacks before others in the combat phase.",
    phase: "Combat Phase",
    turn: "Both", // Could be "Player", "Opponent", or "Both"
  },
  {
    id: 2,
    name: "Shield Wall",
    description: "Add +1 to saves during the opponent's combat phase.",
    phase: "Combat Phase",
    turn: "Opponent",
  },
  // Add more skills as needed
];
