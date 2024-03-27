import React from 'react';
import { useState } from 'react';
import "./Project.css"
import { listAll } from 'firebase/storage';
import { colRefImages } from '../../../firebase';
import { getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router';

const Project = (props) => {

  const [image, setImage] = useState("");

  listAll(colRefImages).then((response) => {
    response.items.forEach((item) => {
      getDownloadURL(item).then((url) => {
        if (item.name === props.project.image) setImage(url);
      });
    });
  });

  const navigate = useNavigate();

  const HandleProjectClicked = () => {
    navigate("/projects/" + `${props.project.id}`);
  }

  return (

    <>
      {image !== "" && props.project.name && props.project.type && props.project.overview ? (
        <div className="project" onClick={HandleProjectClicked}>
          <div className="project--image_container">
            <img src={image} alt="" className="project--image" />
          </div>
          <div className="project--descriptions">
            <div className="project--name">{props.project.name}</div>
            <div className="project--type">{props.project.type}</div>
            <div className="project--overview">{props.project.overview}</div>
          </div>
        </div>
      ) : (
        <div className="project">
          <div className="project--image_container">
            <img src="" alt="" className="project--image" />
          </div>
          <div className="project--descriptions">
            <div className="project--name">Cannot load data from Firebase</div>
            <div className="project--type">Cannot load data from Firebase</div>
            <div className="project--overview">Cannot load data from Firebase</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Project;