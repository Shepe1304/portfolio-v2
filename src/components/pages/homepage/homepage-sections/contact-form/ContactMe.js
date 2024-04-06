import React from "react";
import "./ContactMe.css";
import envelope from "../../../../assets/images/envelope.png";
import phone from "../../../../assets/images/phone.png";

const ContactMe = () => {
  return (
    <>
      <div className="contactMe--scroll_anchor" id="contactMe" style={{marginBottom:"80px"}}></div>
      <div className="contactMe">
        <div className="contactMe--heading">GET IN TOUCH</div>
        <div className="contactMe--contents">
          <div className="contactMe--statement">
            <div className="contactMe--statement_text">
              I love creativity and am always striving for improvement. As a
              fast learner, you can entrust me with a task and expect my utmost
              efforts in order to complete it.
            </div>
            <div
              className="contactMe--statement_text"
              style={{ fontWeight: "bold", color: "rgb(245, 232, 155)" }}
            >
              If you want to collaborate, please feel free to contact me via the
              email below or send this form!
            </div>
            {/* <div className="contactMe--statement_image">
            <img src={envelope} alt="" />
          </div> */}
            <div className="contactMe--contacts">
              <div className="contactMe--contact_container">
                <img
                  src={envelope}
                  alt=""
                  className="contactMe--contact_icon"
                />
                <div className="contactMe--email">hqgiang1346@gmail.com</div>
              </div>
              <div className="contactMe--contact_container">
                <img src={phone} alt="" className="contactMe--contact_icon" />
                <div className="contactMe--phone">+84918460768</div>
              </div>
            </div>
          </div>
          <div className="contactMe--form_container">
            <div className="contactMe--form">
              <input
                type="text"
                placeholder="Name..."
                className="contactMe--name_input"
              />
              <input
                type="text"
                placeholder="Email..."
                className="contactMe--name_email"
              />
              {/* <input type="text" placeholder="What you want to say..."/> */}
              <textarea
                cols="30"
                rows="10"
                placeholder="Please type what you want to say..."
                className="contactMe--content_input"
              ></textarea>
              <button className="contactMe--submit_button">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
