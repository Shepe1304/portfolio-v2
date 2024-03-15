import React, { useEffect, useState } from "react";
import "./Projects.css";
import Project from "./Project";
import { colRefProjects } from "../../../../../firebase";
import { getDocs } from "firebase/firestore";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const data = await getDocs(colRefProjects);
      let tmpProjects = []
      data.docs.map((doc) => {
        if (doc.data().selected) {
          tmpProjects = [...tmpProjects, doc.data()]
        }
      })
      // setProjects(
      //   data.docs.map((doc) => ({
      //     ...doc.data(),
      //     // id: doc.id,
      //   }))
      // );
      setProjects(tmpProjects)
    };
    getProjects();
  }, []);

  return (
    <div className="selectedProjects">
      {/* <div className="selectedProjects--section"> */}
      <div className="selectedProjects--headings">
        <div className="selectedProjects--heading">SELECTED WORK</div>
        <div className="selectedProjects--see_more">See more &#x2192;</div>
      </div>
      <div className="selectedProjects--project_list">
        {projects.map((project) => {
          return (
            <Project
              abstract={project.abstract}
              awards={project.awards}
              demo={project.demo}
              github={project.github}
              id={project.id}
              image={project.image}
              name={project.name}
              overview={project.overview}
              pdf={project.pdf}
              selected={project.selected}
              topic={project.topic}
              type={project.type}
              website={project.website}
            />
          );
        })}
      </div>
    </div>
    // </div>
  );
};

export default Projects;
