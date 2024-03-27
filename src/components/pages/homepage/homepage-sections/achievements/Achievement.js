import React, { useState } from "react";
import "./Achievement.css";
import goldtrophy from "../../../../assets/images/goldtrophy.png"
import silvertrophy from "../../../../assets/images/silvertrophy.png"
import bronzetrophy from "../../../../assets/images/bronzetrophy.png"
import metaltrophy from "../../../../assets/images/metaltrophy.png"
import { useNavigate } from "react-router";

const Achievement = (props) => {
  const [image, setImage] = useState("");

  const navigate = useNavigate()

  const HandleAchievementClicked = () => {
    navigate("/achievements");
  }

  // listAll(colRefImages).then((response) => {
  //   response.items.forEach((item) => {
  //     getDownloadURL(item).then((url) => {
  //       if (item.name === props.image) setImage(url);
  //     });
  //   });
  // });

  return (
    <div className="selectedAchievement" onClick={HandleAchievementClicked}>
      <div className="selectedAchievement--image_container">
        <img src="" alt="" className="selectedAchievement--image" />
      </div>
      <div className="selectedAchievement--texts">
        <div className="selectedAchievement--first_line">
          <div className="selectedAchievement--trophy_container">
            <img src={goldtrophy} alt="" className="selectedAchievement--trophy" />
            {/* <div className="selectedAchievement--trophy_tag">FIRST PRIZE</div> */}
            <div className="selectedAchievement--trophy_tag">{props.achievement.prize}</div>
          </div>
          <div className="selectedAchievement--name">{props.achievement.contest}</div>
          <div className="selectedAchievement--year">{props.achievement.year}</div>
        </div>
        <div className="selectedAchievement--sector">{props.achievement.sector}</div>
        <div className="selectedAchievement--description">
          {props.achievement.description}
        </div>
      </div>
    </div>
  );
};

export default Achievement;
