import React, { useEffect, useState } from "react";
import Homepage from "./components/pages/homepage/Homepage";
import { Routes, Route } from "react-router";
import Projects from "./components/pages/projects/Projects";
import Achievements from "./components/pages/achievements/Achievements";
import ExperienceList from "./components/pages/experience/ExperienceList";
import Resume from "./components/pages/resume/Resume";
import { colRefProjects } from "./firebase";
import { colRefExperienceList } from "./firebase";
import { getDocs } from "firebase/firestore";
import ProjectDetails from "./components/pages/projects/ProjectDetails";
import ExperienceDetails from "./components/pages/experience/ExperienceDetails";

function App() {
  const [projects, setProjects] = useState([]);
  const [experienceList, setExperienceList] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const data = await getDocs(colRefProjects);
      setProjects(
        data.docs.map((doc) => ({
          ...doc.data(),
          // id: doc.id?\
        }))
      );
    };
    getProjects();

    const getExperienceList = async () => {
      const data = await getDocs(colRefExperienceList);
      setExperienceList(
        data.docs.map((doc) => ({
          ...doc.data(),
          // id: doc.id?\
        }))
      );
    };
    getExperienceList();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/achievements" element={<Achievements />} />
        <Route exact path="/experience" element={<ExperienceList />} />
        <Route exact path="/resume" element={<Resume />} />
        {projects.map((project) => {
          return (
            <Route
              exact
              path={`${"/projects/" + project.id}`}
              element={
                <ProjectDetails
                  abstract={project.abstract}
                  awards={project.awards}
                  demo={project.demo}
                  github={project.github}
                  id={project.id}
                  image={project.image}
                  name={project.name}
                  overview={project.overview}
                  pdf={project.pdf}
                  documentation={project.documentation}
                  selected={project.selected}
                  topic={project.topic}
                  type={project.type}
                  website={project.website}
                  background={project.background}
                />
              }
            />
          );
        })}
        {experienceList.map((experience) => {
          return (
            <Route
              exact
              path={`${"/experience/" + experience.id}`}
              element={
                <ExperienceDetails
                  description={experience.description}
                  id={experience.id}
                  image={experience.image}
                  name={experience.name}
                  organizationWebsite={experience.organizationWebsite}
                  selected={experience.selected}
                  skillsAcquired={experience.skillsAcquired}
                  type={experience.type}
                  role={experience.role}
                />
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
