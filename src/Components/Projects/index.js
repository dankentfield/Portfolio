import React from "react";
import projOne from "../../assets/images/circgymtrackerScreenshot.png";
import projTwo from "../../assets/images/circserver.png";
import projThree from "../../assets/images/circlingqscreenshot.png";
import "./index.css";

export default () => {
  return (
    <div className="projects-outer-container">
      <h1>Projects</h1>
      <div className="projects-container">
        <div className="project-item">
          <a href="https://github.com/dk03/gym-tracker-react-native">
            <h2>Gym Tracker - <br />React Native</h2>
            <div className="project-image-container">
              <img  src={projOne} alt="" />
            </div>
          </a>
        </div>
        <div className="project-item">
          <a href="https://github.com/dk03/gym-tracker-node-server">
            <h2>Gym Tracker - <br />Node Mongo server</h2>
            <div className="project-image-container">
              <img src={projTwo} alt="" />
            </div>
          </a>
        </div>
        <div className="project-item">
          <a href="https://github.com/dk03/LingQ-text-to-audio-generator">
            <h2>LingQ - <br />Text to speech</h2>
            <div className="project-image-container">
              <img src={projThree} alt="" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
