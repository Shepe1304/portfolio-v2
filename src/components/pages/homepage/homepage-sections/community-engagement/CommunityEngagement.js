import React, { useState } from "react";
import "./CommunityEngagement.css";
import { colRefImages } from "../../../../../firebase";
import { listAll, getDownloadURL } from "firebase/storage";

const CommunityEngagement = (props) => {
  const [image, setImage] = useState("");

  listAll(colRefImages).then((response) => {
    response.items.forEach((item) => {
      getDownloadURL(item).then((url) => {
        if (item.name === props.communityEngagement.image) setImage(url);
      });
    });
  });

  return (
    <div className="selectedCommunityEngagement">
      <div className="selectedCommunityEngagement--image_container">
        <img
          src={image}
          alt=""
          className="selectedCommunityEngagement--image"
        />
      </div>
      <div className="selectedCommunityEngagement--descriptions">
        <div className="selectedCommunityEngagement--name">
          {props.communityEngagement.name}
        </div>
        <div className="selectedCommunityEngagement--type">
          {props.communityEngagement.type}
        </div>
        <div className="selectedCommunityEngagement--overview">
          {props.communityEngagement.overview}
        </div>
      </div>
    </div>
  );
};

export default CommunityEngagement;
