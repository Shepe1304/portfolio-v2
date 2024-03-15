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
        <div className="projectDetails--name">{props.name}</div>
        <>
          {props.type && props.type != "" ? (
            <div className="projectDetails--type">{props.type}</div>
          ) : null}
        </>
        <div className="projectDetails--sections">
          {props.topic && props.topic != "" ? (
            <div className="projectDetails--section">
              <div className="projectDetails--sectionHeading">
                Research Topic
              </div>
              <div className="projectDetails--sectionContent">
                {props.topic}
              </div>
            </div>
          ) : null}
          {props.overview && props.overview != "" ? (
            <div className="projectDetails--section">
              <div className="projectDetails--sectionHeading">
                Project Overview
              </div>
              <div className="projectDetails--sectionContent">
                {props.overview}
              </div>
            </div>
          ) : null}
          {props.background && props.background != "" ? (
            <div className="projectDetails--section">
              <div className="projectDetails--sectionHeading">
                Background Information
              </div>
              <div className="projectDetails--sectionContent">
                {props.background}
              </div>
            </div>
          ) : null}
          {props.awards && props.awards != "" ? (
            <div className="projectDetails--section">
              <div className="projectDetails--sectionHeading">Awards</div>
              <div className="projectDetails--sectionContent">
                {props.awards}
              </div>
            </div>
          ) : null}
          {props.website && props.website != "" ? (
            <div className="projectDetails--section">
              <a href={`${props.website}`} target="_blank">
                <button className="projectDetails--sectionHeading">
                  Website Link
                </button>
              </a>
              {/* <div className="projectDetails--sectionContent">{props.pdf}</div> */}
            </div>
          ) : null}
          {props.demo && props.demo != "" ? (
            <div className="projectDetails--section">
              <a href={`${props.demo}`} target="_blank">
                <button className="projectDetails--sectionHeading">
                  Demonstration Video
                </button>
              </a>
              {/* <div className="projectDetails--sectionContent">{props.pdf}</div> */}
            </div>
          ) : null}
          {props.github && props.github != "" ? (
            <div className="projectDetails--section">
              <a href={`${props.github}`} target="_blank">
                <button className="projectDetails--sectionHeading">
                  GitHub Repository
                </button>
              </a>
              {/* <div className="projectDetails--sectionContent">{props.pdf}</div> */}
            </div>
          ) : null}
          {props.documentation && props.documentation != "" ? (
            <div className="projectDetails--section">
              <a href={`${props.documentation}`} target="_blank">
                <button className="projectDetails--sectionHeading">
                  Documentation
                </button>
              </a>
              {/* <div className="projectDetails--sectionContent">{props.pdf}</div> */}
            </div>
          ) : null}
          {props.pdf && props.pdf != "" ? (
            <div className="projectDetails--section">
              <a href={`${props.pdf}`} target="_blank">
                <button className="projectDetails--sectionHeading">
                  Download Research Report
                </button>
              </a>
              {/* <div className="projectDetails--sectionContent">{props.pdf}</div> */}
            </div>
          ) : null}
        </div>
      </div>
      <Footer color="black" backgroundColor="white" />
    </div>
  );
};

export default ProjectDetails;
