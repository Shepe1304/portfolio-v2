import React, { useRef, useState } from "react";
import "./ContactMe.css";
import envelope from "../../../../assets/images/envelope.png";
import phone from "../../../../assets/images/phone.png";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const form = useRef();

  const [formcontent, setFormcontent] = useState("");
  const [formname, setFormname] = useState("");
  const [formemail, setFormemail] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_hm7tmua", "template_n4pli9v", form.current, {
        publicKey: "yJC8j_WODIfX6drXQ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    alert("Form successfully submitted. Thank you for your message.");
    setFormcontent("");
    setFormname("");
    setFormemail("");
  };

  return (
    <>
      <div
        className="contactMe--scroll_anchor"
        id="contactMe"
        style={{ marginBottom: "80px" }}
      ></div>
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
            <form className="contactMe--form" ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                placeholder="Name..."
                className="contactMe--name_input"
                name="from_name"
                value={formname}
                onChange={(e) => setFormname(e.target.value)}
              />
              <input
                type="text"
                placeholder="Email..."
                className="contactMe--name_email"
                name="from_email"
                value={formemail}
                onChange={(e) => setFormemail(e.target.value)}
              />
              <textarea
                cols="30"
                rows="10"
                placeholder="Please type what you want to say..."
                className="contactMe--content_input"
                name="message"
                value={formcontent}
                onChange={(e) => setFormcontent(e.target.value)}
              ></textarea>
              <button className="contactMe--submit_button">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
