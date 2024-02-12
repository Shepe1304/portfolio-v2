import React, { useState } from "react";
import "./Experience.css";
import { listAll, ref, getDownloadURL } from "firebase/storage";
import { colRefImages } from "../../../../../firebase";

const SelectedExperience = (props) => {
  const [image, setImage] = useState("");

  listAll(colRefImages).then((response) => {
    response.items.forEach((item) => {
      getDownloadURL(item).then((url) => {
        if (item.name === props.image) setImage(url);
      });
    });
  });

  return (
    <div className="selectedExperience">
      <div className="selectedExperience--image_container">
        <img src="" alt="" className="selectedExperience--image" />
      </div>
      <div className="selectedExperience--texts">
        <div className="selectedExperience--name">DESLab</div>
        <div className="selectedExperience--type">Research Internship</div>
        <div className="selectedExperience--description">
          Researched at DESLab, Electronics and Telecommunication Department,
          VNUHCM-University of Science, under Dr. Duc-Hung Le's mentorship in
          PIISE Research Symposium.
        </div>
      </div>
    </div>
  );
};

export default SelectedExperience;
