import React from "react";
import "./index.css";
import NavBar from "../Navbar";
import CV from "../../assets/DanielKentfieldCV.pdf";


const Header = `London based FullStack Programmer`;
const subHeader = `with an interest in languages and building distributed systems`;
const subHeader2 = ``;
const VIEW_MY_CV = 'VIEW MY CV';
const PROJECTS = 'VIEW MY PROJECTS';

const Hero = () => {
  return (
    <div className="hero-container">
      <NavBar />

      <div className="header-text-container">
        <h1 className="header-text ">{Header}</h1>
        <h2 className="white-text">{subHeader}</h2>
      </div>

      <div className="button-container">
        <div className="download-cv-badge-container">
          <a href={CV} target="_blank">
            <div className="download-cv-badge-container-background">
              <h3 className="download-cv-badge-text ">{VIEW_MY_CV}</h3>
            </div>
          </a>
        </div>

        <div className="download-cv-badge-container">
          <a href="#projects">
          <div className="download-cv-badge-container-background">
            <h3 className="download-cv-badge-text ">{PROJECTS}</h3>
          </div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Hero;
