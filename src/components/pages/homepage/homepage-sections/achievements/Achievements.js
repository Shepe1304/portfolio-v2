import React from "react";
import Achievement from "./Achievement";
import "./Achievements.css";

const Achievements = () => {
  return (
    <div className="selectedAchievements">
      <div className="selectedAchievements--headings">
        <div className="selectedAchievements--heading">ACHIEVEMENTS</div>
        <div className="selectedAchievements--see_more">
          See more &#x2192;
        </div>
      </div>
      <div className="selectedAchievements--achievement_list">
        {[1, 2, 3, 4].map(() => {
          return <Achievement />;
        })}
      </div>
    </div>
  );
};

export default Achievements;
