import React from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import "./Resume.css";
import nightsky from "../../assets/images/nightsky.png";

const Resume = () => {
  return (
    <div className="resume">
      <Header />
      <div className="resume--main">
        <img src={nightsky} alt="" className="homepage--background" />
        <div className="resume--heading">SHEPE'S RESUME</div>
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
