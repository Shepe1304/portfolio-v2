import React, { useState } from "react";
import "./Achievement.css";
import goldtrophy from "../../assets/images/goldtrophy.png";
import { useNavigate } from "react-router";
import { colRefImages } from "../../../firebase";
import { listAll, getDownloadURL } from "firebase/storage";

const Achievement = (props) => {
  const navigate = useNavigate();

  const HandleAchievementClicked = () => {
    navigate("/achievements/" + `${props.achievement.id}`);
  };

  // const [images, setImages] = useState([]);
  const [image0, setImage0] = useState("")
  const [image1, setImage1] = useState("")
  const [image2, setImage2] = useState("")
  const [image3, setImage3] = useState("")

  listAll(colRefImages).then((response) => {
    response.items.forEach((item) => {
      getDownloadURL(item).then((url) => {
        if (item.name === props.achievement.images[0]) {
          setImage0(url)
        }
        if (item.name === props.achievement.images[1]) {
          setImage1(url)
        }
        if (item.name === props.achievement.images[2]) {
          setImage2(url)
        }
        if (item.name === props.achievement.images[3]) {
          setImage3(url)
        }
        // if (item.name === props.image) setImage(url);
        // if (props.achievement.images.includes(item.name)) {
        //   if (image0 === "") {
        //     setImage0(url);
        //   }
        //   else if (image1 === "") {
        //     setImage1(url)
        //   }
        //   else if (image2 === "") {
        //     setImage2(url)
        //   }
        //   else if (image3 === "") {
        //     setImage3(url)
        //   }
        // }
      });
    });
  }, []);

  return (
    <div className="achievement" onClick={HandleAchievementClicked}>
      <div className="achievement--image_grid">
        <div
          className="achievement--image_container"
          // style={{ backgroundColor: "darkred" }}
        >
          <img src={image0} alt="" className="achievement--image" />
        </div>
        <div
          className="achievement--image_container"
          // style={{ backgroundColor: "darkorange" }}
        >
          <img src={image1} alt="" className="achievement--image" />
        </div>
        <div
          className="achievement--image_container"
          // style={{ backgroundColor: "orangered" }}
        >
          <img src={image2} alt="" className="achievement--image" />
        </div>
        <div
          className="achievement--image_container"
          // style={{ backgroundColor: "goldenrod" }}
        >
          <img src={image3} alt="" className="achievement--image" />
        </div>
      </div>
      <div className="achievement--texts">
        <div className="achievement--first_line">
          <div className="achievement--trophy_container">
            <img src={goldtrophy} alt="" className="achievement--trophy" />
            <div className="achievement--trophy_tag">
              {props.achievement.prize}
            </div>
          </div>
          <div className="achievement--name">{props.achievement.contest}</div>
        </div>
        <div className="achievement--sector">{props.achievement.sector}</div>
        <div className="achievement--description">
          {props.achievement.description}
        </div>
      </div>
    </div>
  );
};

export default Achievement;
