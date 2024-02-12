import React from "react";
import profile_pic from "../../../../assets/images/profile_pic.jpg";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro--texts">
        <div className="intro--name">
          <div className="intro--real_name">QUYNH GIANG HO</div>
          <div className="intro--nickname" style={{ color: "skyblue" }}>
            ( Shepe ! )
          </div>
        </div>
        <div className="intro--personal_statement">
          <span className="intro--personal_statement_text">Programmer</span>,{" "}
          <span className="intro--personal_statement_text">
            ambitious developer
          </span>
          ,
          <br />
          <span className="intro--personal_statement_text">
            and aspiring engineer!
          </span>
        </div>
      </div>
      <div className="profile_pic_big_container">
        <div className="intro--profile_pic_container">
          <img src={profile_pic} alt="" className="intro--profile_pic" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
