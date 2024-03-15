import React from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import nightsky from "../../assets/images/nightsky.png";
import "./Achievements.css";
import Achievement from "./Achievement";

const Achievements = () => {
  return (
    <div className="achievements">
      <Header color="white" backgroundColor="#2e3047"/>
      <div className="achievements--main">
        <img src={nightsky} alt="" className="achievements--background" />
        <div className="achievements--heading">SHEPE'S ACHIEVEMENTS</div>
        <div className="achievements--grid">
          <Achievement />
          <Achievement />
          <Achievement />
        </div>
      </div>
      <Footer color="white" backgroundColor="#2e3047"/>
    </div>
  );
};

export default Achievements;
