import React from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import "./Homepage.css";
import Intro from "./homepage-sections/intro/Intro";
import Projects from "./homepage-sections/projects/Projects";
import ExperienceList from "./homepage-sections/experience/ExperienceList";
import Achievements from "./homepage-sections/achievements/Achievements";
import nightsky from "../../assets/images/nightsky.png"
import CommunityEngagements from "./homepage-sections/community-engagement/CommunityEngagements";
import ContactMe from "./homepage-sections/contact-form/ContactMe";

const homepage = () => {
  return (
    <div className="homepage">
      <Header color="white" />
      <main className="homepage--main">
        <img src={nightsky} alt="" className="homepage--background" />
        <Intro />
        <Projects />
        <ExperienceList />
        <Achievements />
        <CommunityEngagements />
        <ContactMe />
      </main>
      <Footer color="white" />
    </div>
  );
};

export default homepage;
