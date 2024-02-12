import React, { useState } from "react";
import "./Achievement.css";
import goldtrophy from "../../../../assets/images/goldtrophy.png"
import silvertrophy from "../../../../assets/images/silvertrophy.png"
import bronzetrophy from "../../../../assets/images/bronzetrophy.png"
import metaltrophy from "../../../../assets/images/metaltrophy.png"

const Achievement = () => {
  const [image, setImage] = useState("");

  // listAll(colRefImages).then((response) => {
  //   response.items.forEach((item) => {
  //     getDownloadURL(item).then((url) => {
  //       if (item.name === props.image) setImage(url);
  //     });
  //   });
  // });

  return (
    <div className="selectedAchievement">
      <div className="selectedAchievement--image_container">
        <img src="" alt="" className="selectedAchievement--image" />
      </div>
      <div className="selectedAchievement--texts">
        <div className="selectedAchievemenet--first_line">
          <div className="selectedAchievement--trophy_container">
            <img src={goldtrophy} alt="" className="selectedAchievement--trophy" />
          </div>
          <div className="selectedAchievement--name">DESLab</div>
        </div>
        <div className="selectedAchievement--type">Research Internship</div>
        <div className="selectedAchievement--description">
          Researched at DESLab, Electronics and Telecommunication Department,
          VNUHCM-University of Science, under Dr. Duc-Hung Le's mentorship in
          PIISE Research Symposium.
        </div>
      </div>
    </div>
  );
};

export default Achievement;
