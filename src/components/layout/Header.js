import React from "react";
import shepeLogo from "../assets/images/shepeWithoutGlasses2.png";
import "./Header.css";

const Header = (props) => {
  return (
    <>
      <header className="header" style={{ color: props.color }}>
        <div className="header--logo_container">
          <img src={shepeLogo} alt="" className="header--logo" />
          <div className="header--logo_text">Shepe</div>
        </div>
        <div className="header--buttons">
          <div className="header--button">
            <div className="header--button_text">PROJECTS</div>
            <div className="header--button_slide"></div>
            <div className="header--button_slide2"></div>
          </div>
          <div className="header--button">
            <div className="header--button_text">ACHIEVEMENTS</div>
            <div className="header--button_slide"></div>
            <div className="header--button_slide2"></div>
          </div>
          <div className="header--button">
            <div className="header--button_text">EXPERIENCE</div>
            <div className="header--button_slide"></div>
            <div className="header--button_slide2"></div>
          </div>
          <div className="header--button">
            <div className="header--button_text">MY RESUME</div>
            <div className="header--button_slide"></div>
            <div className="header--button_slide2"></div>
          </div>
          <div className="header--button">
            <div className="header--button_text">CONTACT ME</div>
            <div className="header--button_slide"></div>
            <div className="header--button_slide2"></div>
          </div>
        </div>
      </header>
      <div className="header--dummy"></div>
    </>
  );
};

export default Header;
