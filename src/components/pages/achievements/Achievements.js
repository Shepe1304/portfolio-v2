import React, { useEffect, useState } from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import nightsky from "../../assets/images/nightsky.png";
import "./Achievements.css";
import Achievement from "./Achievement";
import { colRefAchievements } from "../../../firebase";
import { getDocs } from "firebase/firestore";

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    const getAchievements = async () => {
      const data = await getDocs(colRefAchievements);
      setAchievements(
        data.docs.map((doc) => ({
          ...doc.data(),
        }))
      );
    };
    getAchievements();
  }, []);

  return (
    <div className="achievements">
      <Header color="white" backgroundColor="#2e3047" />
      <div className="achievements--main">
        <img src={nightsky} alt="" className="achievements--background" />
        <div className="achievements--heading">SHEPE'S ACHIEVEMENTS</div>
        <div className="achievements--subheading">
          A compilation of Shepe's achievements. Click to see details!
        </div>
        <div className="achievements--grid">
          {achievements.map((achievement) => {
            return <Achievement achievement={achievement} />;
          })}
        </div>
      </div>
      <Footer color="white" backgroundColor="#2e3047" />
    </div>
  );
};

export default Achievements;
