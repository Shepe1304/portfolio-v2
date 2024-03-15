import React from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import nightsky from "../../assets/images/nightsky.png";
import "./ExperienceList.css";

const ExperienceList = () => {
  return (
    <div className="experienceList">
      <Header />
      <div className="experienceList--main">
        <img src={nightsky} alt="" className="achievements--background" />
        <div className="achievements--heading">SHEPE'S EXPERIENCE</div>
      </div>
      <Footer />
    </div>
  );
};

export default ExperienceList;
