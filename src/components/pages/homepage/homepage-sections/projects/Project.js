import React, { useState } from "react";
import "./Project.css";
import { listAll, ref, getDownloadURL } from "firebase/storage";
import { colRefImages } from "../../../../../firebase";
import { useNavigate } from "react-router";

const Project = (props) => {
  const [image, setImage] = useState("");

  listAll(colRefImages).then((response) => {
    response.items.forEach((item) => {
      getDownloadURL(item).then((url) => {
        if (item.name === props.image) setImage(url);
      });
    });
  });

  const navigate = useNavigate()

  const HandleSelectedProjectClicked = () => {
    navigate("/projects")
  }

  return (
    <>
      {image !== "" && props.name && props.type && props.overview ? (
        <div className="selectedProject" onClick={HandleSelectedProjectClicked}>
          <div className="selectedProject--image_container">
            <img src={image} alt="" className="selectedProject--image" />
          </div>
          <div className="selectedProject--descriptions">
            <div className="selectedProject--name">{props.name}</div>
            <div className="selectedProject--type">{props.type}</div>
            <div className="selectedProject--overview">{props.overview}</div>
          </div>
        </div>
      ) : (
        <div className="selectedProject">
          <div className="selectedProject--image_container">
            <img src="" alt="" className="selectedProject--image" />
          </div>
          <div className="selectedProject--descriptions">
            <div className="selectedProject--name">Loading data from database...</div>
            <div className="selectedProject--type">Loading data from database...</div>
            <div className="selectedProject--overview">Loading data from database...</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Project;
