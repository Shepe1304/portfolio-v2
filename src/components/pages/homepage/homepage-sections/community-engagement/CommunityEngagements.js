import React, { useState, useEffect } from "react";
import "./CommunityEngagements.css";
import CommunityEngagement from "./CommunityEngagement";
import { colRefExperienceList } from "../../../../../firebase";
import { getDocs } from "firebase/firestore";

const CommunityEngagements = () => {
  const [communityEngagements, setCommunityEngagements] = useState([]);

  useEffect(() => {
    const getCommunityEngagements = async () => {
      const data = await getDocs(colRefExperienceList);
      let tmpCommunityEngagements = [];
      data.docs.map((doc) => {
        if (doc.data().category === "community" && doc.data().selected) {
          tmpCommunityEngagements = [...tmpCommunityEngagements, doc.data()];
        }
      });
      setCommunityEngagements(tmpCommunityEngagements);
    };
    getCommunityEngagements();
  }, []);

  return (
    <div className="selectedCommunityEngagements">
      <div className="selectedCommunityEngagements--headings">
        <div className="selectedCommunityEngagements--heading">
          COMMUNITY ENGAGEMENT
        </div>
      </div>
      <div className="selectedCommunityEngagements--communityEngagement_list">
        {communityEngagements.map((communityEngagement) => {
          return (
            <CommunityEngagement communityEngagement={communityEngagement} />
          );
        })}
      </div>
    </div>
  );
};

export default CommunityEngagements;
