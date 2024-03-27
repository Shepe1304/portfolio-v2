import React, { useEffect, useState } from "react";
import "./ExperienceList.css";
import Experience from "./Experience";
import { colRefExperienceList } from "../../../../../firebase";
import { getDocs } from "firebase/firestore";
import { useNavigate } from "react-router";

const ExperienceList = () => {
  const [experienceList, setExperienceList] = useState([]);

  useEffect(() => {
    const getExperienceList = async () => {
      const data = await getDocs(colRefExperienceList);
      let tmpExperienceList = [];
      data.docs.map((doc) => {
        if (doc.data().selected) {
          tmpExperienceList = [...tmpExperienceList, doc.data()];
        }
      });
      setExperienceList(tmpExperienceList);
    };
    getExperienceList();
  }, []);

  const navigate = useNavigate()

  const HandleSeeMoreClicked = () => {
    navigate("/experience")
  }

  return (
    <div className="selectedExperienceList">
      <div className="selectedExperienceList--headings">
        <div className="selectedExperienceList--heading">WORK EXPERIENCE</div>
        <div className="selectedExperienceList--see_more" onClick={HandleSeeMoreClicked}>
          See more &#x2192;
        </div>
      </div>
      <div className="selectedExperienceList--experience_list">
        {experienceList.map((experience) => {
          return <Experience 
            experience={experience}
          />;
        })}
      </div>
    </div>
  );
};

export default ExperienceList;
