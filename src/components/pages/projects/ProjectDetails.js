import React from "react";
import "./ProjectDetails.css";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import { useNavigate } from "react-router";

const ProjectDetails = (props) => {

  const navigate = useNavigate()

  const HandleBackButtonClicked = () => {
    navigate("/projects");
  }

  return (
    <div className="projectDetails">
      <Header color="black" backgroundColor="white" />
      <div className="projectDetails--main">
        <div className="projectDetails--backButton" onClick={HandleBackButtonClicked} style={{marginBottom: "20px"}}><span style={{fontSize: "30px", marginBottom: "5px"}}>&#x2190;</span> <span style={{fontSize: "20px"}}>Back to Projects</span></div>
        <div className="projectDetails--name">{props.project.name}</div>
        <>
          {props.project.type && props.project.type !== "" ? (
            <div className="projectDetails--type">{props.project.type}</div>
          ) : null}
        </>
        <div className="projectDetails--sections">
          {props.project.topic && props.project.topic !== "" ? (
            <div className="projectDetails--section">
              <div className="projectDetails--sectionHeading">
                Research Topic
              </div>
              <div className="projectDetails--sectionContent">
                {props.project.topic}
              </div>
            </div>
          ) : null}
          {props.project.topic && props.project.topic !== "" ? (
            <div className="projectDetails--section">
              <div className="projectDetails--sectionHeading">
                Research Abstract
              </div>
              <div className="projectDetails--sectionContent">
                {props.project.abstract}
              </div>
            </div>
          ) : null}
          {props.project.overview && props.project.overview !== "" ? (
            <div className="projectDetails--section">
              <div className="projectDetails--sectionHeading">
                Overview
              </div>
              <div className="projectDetails--sectionContent">
                {props.project.overview}
              </div>
            </div>
          ) : null}
          {props.project.background && props.project.background !== "" ? (
            <div className="projectDetails--section">
              <div className="projectDetails--sectionHeading">
                Background Information
              </div>
              <div className="projectDetails--sectionContent">
                {props.project.background}
              </div>
            </div>
          ) : null}
          {props.project.awards && props.project.awards !== "" ? (
            <div className="projectDetails--section">
              <div className="projectDetails--sectionHeading">Awards</div>
              <div className="projectDetails--sectionContent">
                {props.project.awards}
              </div>
            </div>
          ) : null}
          {props.project.website && props.project.website !== "" ? (
            <div className="projectDetails--section">
              <a href={`${props.project.website}`} target="_blank" rel="noreferrer">
                <button className="projectDetails--sectionHeading">
                  Website Link
                </button>
              </a>
              {/* <div className="projectDetails--sectionContent">{props.project.pdf}</div> */}
            </div>
          ) : null}
          {props.project.demo && props.project.demo !== "" ? (
            <div className="projectDetails--section">
              <a href={`${props.project.demo}`} target="_blank" rel="noreferrer">
                <button className="projectDetails--sectionHeading">
                  Demonstration Video
                </button>
              </a>
              {/* <div className="projectDetails--sectionContent">{props.project.pdf}</div> */}
            </div>
          ) : null}
          {props.project.github && props.project.github !== "" ? (
            <div className="projectDetails--section">
              <a href={`${props.project.github}`} target="_blank" rel="noreferrer">
                <button className="projectDetails--sectionHeading">
                  GitHub Repository
                </button>
              </a>
              {/* <div className="projectDetails--sectionContent">{props.project.pdf}</div> */}
            </div>
          ) : null}
          {props.project.documentation && props.project.documentation !== "" ? (
            <div className="projectDetails--section">
              <a href={`${props.project.documentation}`} target="_blank" rel="noreferrer">
                <button className="projectDetails--sectionHeading">
                  Documentation
                </button>
              </a>
              {/* <div className="projectDetails--sectionContent">{props.project.pdf}</div> */}
            </div>
          ) : null}
          {props.project.pdf && props.project.pdf !== "" ? (
            <div className="projectDetails--section">
              <a href={`${props.project.pdf}`} target="_blank" rel="noreferrer">
                <button className="projectDetails--sectionHeading">
                  Download Research Report
                </button>
              </a>
              {/* <div className="projectDetails--sectionContent">{props.project.pdf}</div> */}
            </div>
          ) : null}
        </div>
      </div>
      <Footer color="black" backgroundColor="white" />
    </div>
  );
};

export default ProjectDetails;
