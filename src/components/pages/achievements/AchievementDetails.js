import React from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import { useNavigate } from "react-router";
import "./AchievementDetails.css";
import goldtrophy from "../../assets/images/goldtrophy.png";

const AchievementDetails = (props) => {
  const navigate = useNavigate();

  const HandleBackButtonClicked = () => {
    navigate("/achievements");
  };

  return (
    <div className="achievementDetails">
      <Header color="black" backgroundColor="white" />
      <div className="achievementDetails--main">
        <div
          className="achievementDetails--backButton"
          onClick={HandleBackButtonClicked}
          style={{ marginBottom: "20px" }}
        >
          <span style={{ fontSize: "30px", marginBottom: "5px" }}>
            &#x2190;
          </span>{" "}
          <span style={{ fontSize: "20px" }}>Back to Achievements</span>
        </div>
        {/* <div className="achievementDetails--name">{props.achievement.contest}{" "}{props.achievement.year}</div> */}
        <div className="achievementDetails--name">
          {props.achievement.contest}
        </div>
        <>
          {props.achievement.sector && props.achievement.sector !== "" ? (
            <div className="achievementDetails--sector">
              {props.achievement.sector}
            </div>
          ) : null}
          <div className="achievementDetails--year">
            {props.achievement.year}
          </div>
        </>
        <>
          {props.achievement.prize && props.achievement.prize !== "" ? (
            <div className="achievementDetails--trophy_container">
              <img src={goldtrophy} alt="" className="achievementDetails--trophy" />
              <div className="achievementDetails--trophy_tag">
                {props.achievement.prize}
              </div>
            </div>
          ) : null}
        </>
        <div className="achievementDetails--sections">
          {props.achievement.description &&
          props.achievement.description !== "" ? (
            <div className="achievementDetails--section">
              <div className="achievementDetails--sectionHeading">
                Description
              </div>
              <div className="achievementDetails--sectionContent">
                {props.achievement.description}
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <Footer color="black" backgroundColor="white" />
    </div>
  );
};

export default AchievementDetails;
