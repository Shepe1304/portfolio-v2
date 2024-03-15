import React, { useEffect, useState } from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import "./Projects.css";
import nightsky from "../../assets/images/nightsky.png";
import Project from "./Project";
import { colRefProjects } from "../../../firebase";
import { getDocs } from "firebase/firestore";

const Projects = () => {

  const [projects, setProjects] = useState([])

  useEffect(() => {
    const getProjects = async () => {
      const data = await getDocs(colRefProjects)
      setProjects(
        data.docs.map((doc) => ({
          ...doc.data(),
          // id: doc.id?
        }))        
      )
    }
    getProjects()
  }, [])

  return (
    <div className="projects">
      <Header color="white" backgroundColor="#2e3047"/>
      <main className="projects--main">
        <img src={nightsky} alt="" className="projects--background" />
        <div className="projects--heading">SHEPE'S PROJECTS</div>
        <div className="projects--subheading">A sample collection of Shepe's projects. Click to see details!</div>
        <div className="projects--grid">
          {/* {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <Project />
          ))} */}
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
            )
          })}
          {/* boilerplate projects to see the grid layout */}
          <Project />
          <Project />
          <Project />
        </div>
      </main>
      <Footer color="white" backgroundColor="#2e3047"/>
    </div>
  );
};

export default Projects;
