import React from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import "./Resume.css";
import nightsky from "../../assets/images/nightsky.png";

const Resume = () => {
  return (
    <div className="resume">
      <Header color="white" backgroundColor="#2e3047" />
      <div className="resume--main">
        <div className="resume--preview_container">
          <iframe
            className="resume--preview"
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-cdf0d.appspot.com/o/files%2FQUYNH-GIANG-HO_RESUME.pdf?alt=media&token=a9b9759a-66c2-4d1e-a6fc-c9c51a180634"
            frameborder="0"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <Footer color="white" backgroundColor="#2e3047" />
    </div>
  );
};

export default Resume;
