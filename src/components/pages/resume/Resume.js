import React from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import "./Resume.css";
import nightsky from "../../assets/images/nightsky.png";

const Resume = () => {
  return (
    <div className="resume">
      <Header color="white" backgroundColor="#2e3047"/>
      <div className="resume--main">
        <img src={nightsky} alt="" className="homepage--background" />
        <div className="resume--heading">SHEPE'S RESUME</div>
      </div>
      <Footer color="white" backgroundColor="#2e3047"/>
    </div>
  );
};

export default Resume;
