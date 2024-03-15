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
          // id: doc.id?\
        }))        
      )
    }
    getProjects()
  }, [])

  return (
    <div className="projects">
      <Header />
      <main className="projects--main">
        <img src={nightsky} alt="" className="projects--background" />
        <div className="projects--heading">SHEPE'S PROJECTS</div>
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
