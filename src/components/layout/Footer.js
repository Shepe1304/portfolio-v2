import React from "react";
import "./Footer.css";

const Footer = (props) => {
  return (
    <footer className="footer" style={{ color: props.color }}>
      <div className="footer_text">
        <span style={{fontSize: "25px"}}>&#169;</span> 2024 Quynh Giang Ho (Shepe)
      </div>
    </footer>
  );
};

export default Footer;
