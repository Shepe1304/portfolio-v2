import React from "react";
import "./ExperienceList.css";
import Experience from "./Experience";

const ExperienceList = () => {
  return (
    <div className="selectedExperienceList">
      <div className="selectedExperienceList--headings">
        <div className="selectedExperienceList--heading">EXPERIENCE</div>
        <div className="selectedExperienceList--see_more">
          See more &#x2192;
        </div>
      </div>
      <div className="selectedExperienceList--experience_list">
        {[1, 2, 3, 4].map(() => {
          return <Experience />;
        })}
      </div>
    </div>
  );
};

export default ExperienceList;
