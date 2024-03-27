import React from "react";
import "./ExperienceDetails.css";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import { useNavigate } from "react-router";

const ExperienceDetails = (props) => {
  const navigate = useNavigate();

  const HandleBackButtonClicked = () => {
    navigate("/experience");
  };

  return (
    <div className="experienceDetails">
      <Header color="black" backgroundColor="white" />
      <div className="experienceDetails--main">
        <div
          className="experienceDetails--backButton"
          onClick={HandleBackButtonClicked}
          style={{ marginBottom: "20px" }}
        >
          <span style={{ fontSize: "30px", marginBottom: "5px" }}>
            &#x2190;
          </span>{" "}
          <span style={{ fontSize: "20px" }}>Back to Work Experience</span>
        </div>
        <div className="experienceDetails--name">{props.experience.name}</div>
        <>
          {props.experience.type && props.experience.type !== "" ? (
            <div className="experienceDetails--type">{props.experience.type}</div>
          ) : null}
        </>
        <div className="experienceDetails--sections">
          {props.experience.role && props.experience.role !== "" ? (
            <div className="experienceDetails--section">
              <div className="experienceDetails--sectionHeading">Role Held</div>
              <div className="experienceDetails--sectionContent">
                {props.experience.role}
              </div>
            </div>
          ) : null}
          {props.experience.description && props.experience.description !== "" ? (
            <div className="experienceDetails--section">
              <div className="experienceDetails--sectionHeading">
                Description
              </div>
              <div className="experienceDetails--sectionContent">
                {props.experience.description}
              </div>
            </div>
          ) : null}
          {props.experience.skillsAcquired && props.experience.skillsAcquired !== "" ? (
            <div className="experienceDetails--section">
              <div className="experienceDetails--sectionHeading">
                What I learned
              </div>
              <div className="experienceDetails--sectionContent">
                {props.experience.skillsAcquired}
              </div>
            </div>
          ) : null}
          {props.experience.organizationWebsite && props.experience.organizationWebsite !== "" ? (
            <div className="experienceDetails--section">
              <a
                href={`${props.experience.organizationWebsite}`}
                target="_blank"
                rel="noreferrer"
              >
                <button className="experienceDetails--sectionHeading">
                  Organization Website
                </button>
              </a>
              {/* <div className="experienceDetails--sectionContent">{props.experience.pdf}</div> */}
            </div>
          ) : null}
          {props.experience.demo && props.experience.demo !== "" ? (
            <div className="experienceDetails--section">
              <a href={`${props.experience.demo}`} target="_blank" rel="noreferrer">
                <button className="experienceDetails--sectionHeading">
                  Demonstration Video
                </button>
              </a>
              {/* <div className="experienceDetails--sectionContent">{props.experience.pdf}</div> */}
            </div>
          ) : null}
          {props.experience.github && props.experience.github !== "" ? (
            <div className="experienceDetails--section">
              <a href={`${props.experience.github}`} target="_blank" rel="noreferrer">
                <button className="experienceDetails--sectionHeading">
                  GitHub Repository
                </button>
              </a>
              {/* <div className="experienceDetails--sectionContent">{props.experience.pdf}</div> */}
            </div>
          ) : null}
          {props.experience.documentation && props.experience.documentation !== "" ? (
            <div className="experienceDetails--section">
              <a
                href={`${props.experience.documentation}`}
                target="_blank"
                rel="noreferrer"
              >
                <button className="experienceDetails--sectionHeading">
                  Documentation
                </button>
              </a>
              {/* <div className="experienceDetails--sectionContent">{props.experience.pdf}</div> */}
            </div>
          ) : null}
          {props.experience.pdf && props.experience.pdf !== "" ? (
            <div className="experienceDetails--section">
              <a href={`${props.experience.pdf}`} target="_blank" rel="noreferrer">
                <button className="experienceDetails--sectionHeading">
                  Download Research Report
                </button>
              </a>
              {/* <div className="experienceDetails--sectionContent">{props.pdf}</div> */}
            </div>
          ) : null}
        </div>
      </div>
      <Footer color="black" backgroundColor="white" />
    </div>
  );
};

export default ExperienceDetails;
