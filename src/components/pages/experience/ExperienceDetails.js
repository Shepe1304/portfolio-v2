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
        <div className="experienceDetails--name">{props.name}</div>
        <>
          {props.type && props.type !== "" ? (
            <div className="experienceDetails--type">{props.type}</div>
          ) : null}
        </>
        <div className="experienceDetails--sections">
          {props.role && props.role !== "" ? (
            <div className="experienceDetails--section">
              <div className="experienceDetails--sectionHeading">Role Held</div>
              <div className="experienceDetails--sectionContent">
                {props.role}
              </div>
            </div>
          ) : null}
          {props.description && props.description !== "" ? (
            <div className="experienceDetails--section">
              <div className="experienceDetails--sectionHeading">
                Description
              </div>
              <div className="experienceDetails--sectionContent">
                {props.description}
              </div>
            </div>
          ) : null}
          {props.skillsAcquired && props.skillsAcquired !== "" ? (
            <div className="experienceDetails--section">
              <div className="experienceDetails--sectionHeading">
                What I learned
              </div>
              <div className="experienceDetails--sectionContent">
                {props.skillsAcquired}
              </div>
            </div>
          ) : null}
          {props.organizationWebsite && props.organizationWebsite !== "" ? (
            <div className="experienceDetails--section">
              <a
                href={`${props.organizationWebsite}`}
                target="_blank"
                rel="noreferrer"
              >
                <button className="experienceDetails--sectionHeading">
                  Organization Website
                </button>
              </a>
              {/* <div className="experienceDetails--sectionContent">{props.pdf}</div> */}
            </div>
          ) : null}
          {props.demo && props.demo !== "" ? (
            <div className="experienceDetails--section">
              <a href={`${props.demo}`} target="_blank" rel="noreferrer">
                <button className="experienceDetails--sectionHeading">
                  Demonstration Video
                </button>
              </a>
              {/* <div className="experienceDetails--sectionContent">{props.pdf}</div> */}
            </div>
          ) : null}
          {props.github && props.github !== "" ? (
            <div className="experienceDetails--section">
              <a href={`${props.github}`} target="_blank" rel="noreferrer">
                <button className="experienceDetails--sectionHeading">
                  GitHub Repository
                </button>
              </a>
              {/* <div className="experienceDetails--sectionContent">{props.pdf}</div> */}
            </div>
          ) : null}
          {props.documentation && props.documentation !== "" ? (
            <div className="experienceDetails--section">
              <a
                href={`${props.documentation}`}
                target="_blank"
                rel="noreferrer"
              >
                <button className="experienceDetails--sectionHeading">
                  Documentation
                </button>
              </a>
              {/* <div className="experienceDetails--sectionContent">{props.pdf}</div> */}
            </div>
          ) : null}
          {props.pdf && props.pdf !== "" ? (
            <div className="experienceDetails--section">
              <a href={`${props.pdf}`} target="_blank" rel="noreferrer">
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
