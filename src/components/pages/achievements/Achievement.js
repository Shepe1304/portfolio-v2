import React from "react";
import "./Achievement.css"
import goldtrophy from "../../assets/images/goldtrophy.png";

const Achievement = () => {
  return (
    <div className="achievement">
      <div className="achievement--image_grid">
        <div className="achievement--image_container">
          <img src="" alt="" className="achievement--image" />
        </div>
      </div>
      <div className="achievement--texts">
        <div className="achievemenet--first_line">
          <div className="achievement--trophy_container">
            <img src={goldtrophy} alt="" className="achievement--trophy" />
            <div className="achievement--trophy_tag">FIRST PRIZE</div>
          </div>
          <div className="achievement--name">DESLab</div>
        </div>
        <div className="achievement--type"></div>
        <div className="achievement--description"></div>
      </div>
    </div>
  );
};

export default Achievement;
