import React from "react";
import Homepage from "./components/pages/homepage/Homepage";
import { Routes, Route } from "react-router";
import Projects from "./components/pages/projects/Projects";
import Achievements from "./components/pages/achievements/Achievements";
import ExperienceList from "./components/pages/experience/ExperienceList";
import Resume from "./components/pages/resume/Resume";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/achievements" element={<Achievements />} />
        <Route exact path="/experience" element={<ExperienceList />} />
        <Route exact path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
