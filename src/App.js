// App.js
import React from "react";
import { GameProvider } from "./context/GameContext";
import SkillList from "./components/SkillList";
import PhaseSelector from "./components/PhaseSelector";
import TurnIndicator from "./components/TurnIndicator";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <GameProvider>
      <div className="App">
        <Header />
        <PhaseSelector />
        <TurnIndicator />
        <SkillList />
      </div>
    </GameProvider>
  );
}

export default App;
