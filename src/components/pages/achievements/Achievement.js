import React from "react";
import "./Achievement.css"
import goldtrophy from "../../assets/images/goldtrophy.png";
import { useNavigate } from "react-router";

const Achievement = (props) => {

  const navigate = useNavigate()

  const HandleAchievementClicked = () => {
    navigate("/achievements/" + `${props.achievement.id}`)
  }

  return (
    <div className="achievement" onClick={HandleAchievementClicked}>
      <div className="achievement--image_grid">
        <div className="achievement--image_container" style={{backgroundColor:"darkred"}}>
          <img src="" alt="" className="achievement--image"/>
        </div>
        <div className="achievement--image_container" style={{backgroundColor:"darkorange"}}>
          <img src="" alt="" className="achievement--image" />
        </div>
        <div className="achievement--image_container" style={{backgroundColor:"orangered"}}>
          <img src="" alt="" className="achievement--image" />
        </div>
        <div className="achievement--image_container" style={{backgroundColor:"goldenrod"}}>
          <img src="" alt="" className="achievement--image" />
        </div>
      </div>
      <div className="achievement--texts">
        <div className="achievement--first_line">
          <div className="achievement--trophy_container">
            <img src={goldtrophy} alt="" className="achievement--trophy" />
            <div className="achievement--trophy_tag">{props.achievement.prize}</div>
          </div>
          <div className="achievement--name">{props.achievement.contest}</div>
        </div>
        <div className="achievement--sector">{props.achievement.sector}</div>
        <div className="achievement--description">{props.achievement.description}</div>
      </div>
    </div>
  );
};

export default Achievement;
