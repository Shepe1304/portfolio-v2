import React, { useEffect, useState } from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import nightsky from "../../assets/images/nightsky.png";
import "./ExperienceList.css";
import { colRefExperienceList } from "../../../firebase";
import { getDocs } from "firebase/firestore";
import Experience from "./Experience";

const ExperienceList = () => {

  const [experienceList, setExperienceList] = useState([])

  useEffect(() => {
    const getExperienceList = async () => {
      const data = await getDocs(colRefExperienceList)
      setExperienceList(
        data.docs.map((doc) => ({
          ...doc.data()
        }))
      )
    }
    getExperienceList()
  }, [])

  return (
    <div className="experienceList">
      <Header color="white" backgroundColor="#2e3047"/>
      <div className="experienceList--main">
        <img src={nightsky} alt="" className="experienceList--background" />
        <div className="experienceList--heading">SHEPE'S WORK EXPERIENCE</div>
        <div className="experienceList--subheading">A sample collection of Shepe's work experience. Click to see details!</div>
        <div className="experienceList--grid">
          {
            experienceList.map((experience) => {
              return <Experience 
                description={experience.description}
                id={experience.id}
                image={experience.image}
                name={experience.name}
                organizationWebsite={experience.organizationWebsite}
                selected={experience.selected}
                skillsAcquired={experience.skillsAcquired}
                type={experience.type}
              />
            })
          }
        </div>
      </div>
      <Footer color="white" backgroundColor="#2e3047"/>
    </div>
  );
};

export default ExperienceList;
