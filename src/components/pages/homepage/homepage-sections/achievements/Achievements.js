import React, { useEffect, useState } from "react";
import Achievement from "./Achievement";
import "./Achievements.css";
import { colRefAchievements } from "../../../../../firebase";
import { getDocs } from "firebase/firestore";

const Achievements = () => {

  const [achievements, setAchievements] = useState([])

  useEffect(() => {
    const getAchievements = async () => {
      const data = await getDocs(colRefAchievements);
      let tmp = [];
      data.docs.map((doc) => {
        if (doc.data().selected) {
          tmp = [...tmp, doc.data()];
        }
      })
      setAchievements(tmp);
    }
    getAchievements();
  }, [])

  return (
    <div className="selectedAchievements">
      <div className="selectedAchievements--headings">
        <div className="selectedAchievements--heading">ACHIEVEMENTS</div>
        <div className="selectedAchievements--see_more">
          See more &#x2192;
        </div>
      </div>
      <div className="selectedAchievements--achievement_list">
        {achievements.map((achievement) => {
          return <Achievement 
            achievement={achievement}
          />
        })}
      </div>
    </div>
  );
};

export default Achievements;
