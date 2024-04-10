import React, { useState } from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import { useNavigate } from "react-router";
import "./AchievementDetails.css";
import goldtrophy from "../../assets/images/goldtrophy.png";
import { colRefImages } from "../../../firebase";
import { listAll, getDownloadURL } from "firebase/storage";

const AchievementDetails = (props) => {
  const navigate = useNavigate();

  const HandleBackButtonClicked = () => {
    navigate("/achievements");
  };

  const [image0, setImage0] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");

  listAll(colRefImages).then((response) => {
    response.items.forEach((item) => {
      getDownloadURL(item).then((url) => {
        if (item.name === props.achievement.images[0]) {
          setImage0(url);
        }
        if (item.name === props.achievement.images[1]) {
          setImage1(url);
        }
        if (item.name === props.achievement.images[2]) {
          setImage2(url);
        }
        if (item.name === props.achievement.images[3]) {
          setImage3(url);
        }
      });
    });
  }, []);

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
              <img
                src={goldtrophy}
                alt=""
                className="achievementDetails--trophy"
              />
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
          {props.achievement.images && props.achievement.images.length != 0 ? (
            <div className="achievementDetails--section">
              <div className="achievementDetails--sectionHeading">Images</div>
              <div className="achievementDetails--sectionContent achievementDetails--image_grid">
                <div className="achievementDetails--image_row">
                  {image0 !== "" ? (
                    <img
                      src={image0}
                      alt=""
                      className="achievementDetails--image"
                    />
                  ) : (
                    <div className="achievementDetails--image" style={{fontSize:"20px", fontStyle:"italic"}}>
                      Loading images from database...
                    </div>
                  )}
                  {image1 !== "" ? (
                    <img
                      src={image1}
                      alt=""
                      className="achievementDetails--image"
                    />
                  ) : null}
                </div>
                <div className="achievementDetails--image_row">
                  {image0 !== "" ? (
                    <img
                      src={image2}
                      alt=""
                      className="achievementDetails--image"
                    />
                  ) : null}
                  {image1 !== "" ? (
                    <img
                      src={image3}
                      alt=""
                      className="achievementDetails--image"
                    />
                  ) : null}
                </div>
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
