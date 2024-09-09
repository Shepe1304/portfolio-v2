import React from "react";
import shepeLogo from "../assets/images/shepeWithoutGlasses2.png";
import "./Header.css";
import { useNavigate } from "react-router";

const Header = (props) => {
  const navigate = useNavigate();

  const HandleLogoClick = () => {
    navigate("/");
  };

  const HandleProjectsClick = () => {
    navigate("/projects");
  };

  const HandleAchievementsClick = () => {
    navigate("/achievements");
  };

  const HandleExperienceClick = () => {
    navigate("/experience");
  };

  const HandleResumeClick = () => {
    navigate("/resume");
  };

  const ReturnToHomepage = () => {
    navigate("/")
  }
<<<<<<< HEAD

  // console.log(props.showContactMe);

=======
  
>>>>>>> c727dd07086886a654070929942ed4702cdd1b56
  return (
    <>
      <header
        className="header"
        style={{ color: props.color, backgroundColor: props.backgroundColor }}
      >
        <div className="header--logo_container" onClick={HandleLogoClick}>
          <img src={shepeLogo} alt="" className="header--logo" />
          <div className="header--logo_text">Shepe</div>
        </div>
        <div className="header--buttons">
          <div className="header--button" onClick={HandleProjectsClick}>
            <div className="header--button_text">PROJECTS</div>
            <div className="header--button_slide"></div>
            <div className="header--button_slide2"></div>
          </div>
          <div className="header--button" onClick={HandleExperienceClick}>
            <div className="header--button_text">EXPERIENCE</div>
            <div className="header--button_slide"></div>
            <div className="header--button_slide2"></div>
          </div>
          <div className="header--button" onClick={HandleAchievementsClick}>
            <div className="header--button_text">ACHIEVEMENTS</div>
            <div className="header--button_slide"></div>
            <div className="header--button_slide2"></div>
          </div>
          <div className="header--button" onClick={HandleResumeClick}>
            <div className="header--button_text">MY RESUME</div>
            <div className="header--button_slide"></div>
            <div className="header--button_slide2"></div>
          </div>
          {props.showContactMe ? (
            <a className="header--button_container" href="#contactMe">
              <div className="header--button">
                <div className="header--button_text">CONTACT ME</div>
                <div className="header--button_slide"></div>
                <div className="header--button_slide2"></div>
              </div>
            </a>
          ) : (
            <a className="header--button_container" onClick={ReturnToHomepage}>
              <div className="header--button">
                <div className="header--button_text">Homepage</div>
                <div className="header--button_slide"></div>
                <div className="header--button_slide2"></div>
              </div>
            </a>
          )}
        </div>
      </header>
      <div className="header--dummy"></div>
    </>
  );
};

export default Header;
