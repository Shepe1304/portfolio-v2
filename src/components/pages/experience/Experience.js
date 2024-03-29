import React, { useState } from "react";
import { listAll, getDownloadURL } from "firebase/storage";
import "./Experience.css";
import { colRefImages } from "../../../firebase";
import { useNavigate } from "react-router";

const Experience = (props) => {
  const [image, setImage] = useState("");

  listAll(colRefImages).then((response) => {
    response.items.forEach((item) => {
      getDownloadURL(item).then((url) => {
        if (item.name === props.experience.image) setImage(url);
      });
    });
  });

  const navigate = useNavigate();

  const HandleExperienceClicked = () => {
    navigate("/experience/" + `${props.experience.id}`);
  };

  return (
    <div className="experience">
      <div className="experience" onClick={HandleExperienceClicked}>
        <div className="experience--image_container">
          <img src={image} alt="" className="experience--image" />
        </div>
        <div className="experience--texts">
          <div className="experience--name">{props.experience.name}</div>
          <div className="experience--type">{props.experience.type}</div>
          <div className="experience--description">
            {props.experience.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
