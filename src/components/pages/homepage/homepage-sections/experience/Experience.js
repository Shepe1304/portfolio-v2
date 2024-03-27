import React, { useState } from "react";
import "./Experience.css";
import { listAll, ref, getDownloadURL } from "firebase/storage";
import { colRefImages } from "../../../../../firebase";
import { useNavigate } from "react-router";

const SelectedExperience = (props) => {
  const [image, setImage] = useState("");

  listAll(colRefImages).then((response) => {
    response.items.forEach((item) => {
      getDownloadURL(item).then((url) => {
        if (item.name === props.experience.image) setImage(url);
      });
    });
  });

  const navigate = useNavigate()
  
  const HandleSelectedExperienceClicked = () => {
    navigate("/experience")
  }

  return (
    <div className="selectedExperience" onClick={HandleSelectedExperienceClicked}>
      <div className="selectedExperience--image_container">
        <img src={image} alt="" className="selectedExperience--image" />
      </div>
      <div className="selectedExperience--texts">
        <div className="selectedExperience--name">{props.experience.name}</div>
        <div className="selectedExperience--type">{props.experience.type}</div>
        <div className="selectedExperience--description">
          {props.experience.description}
        </div>
      </div>
    </div>
  );
};

export default SelectedExperience;
