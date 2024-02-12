import React from "react";
import "./CommunityEngagements.css"
import CommunityEngagement from "./CommunityEngagement";

const CommunityEngagements = () => {
  return (
    <div>
      <div className="selectedCommunityEngagements">
        <div className="selectedCommunityEngagements--headings">
          <div className="selectedCommunityEngagements--heading">COMMUNITY ENGAGEMENT</div>
          <div className="selectedCommunityEngagements--see_more">See more &#x2192;</div>
        </div>
        <div className="selectedCommunityEngagements--communityEngagement_list">
          {[1,2,3,4].map((item) => {
            return (
              <CommunityEngagement />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CommunityEngagements;
