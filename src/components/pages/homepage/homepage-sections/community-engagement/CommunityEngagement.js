import React from "react";
import "./CommunityEngagement.css";

const CommunityEngagement = () => {
  return (
    <div className="selectedCommunityEngagement">
      <div className="selectedCommunityEngagement--image_container">
        <img src="" alt="" className="selectedCommunityEngagement--image" />
      </div>
      <div className="selectedCommunityEngagement--descriptions">
        <div className="selectedCommunityEngagement--name">Name</div>
        <div className="selectedCommunityEngagement--type">Type</div>
        <div className="selectedCommunityEngagement--overview">Overview</div>
      </div>
    </div>
  );
};

export default CommunityEngagement;
