import React from "react";
import "./index.css";
import reactSpinner from "../../assets/images/logo.svg";
import Github from "../../assets/images/github-logo-dark.png";
import Linkedin from "../../assets/images/linkedin-logo.png";
import CV from "../icons/cv";


export default () => {
  return (
      <div className="footer-container colored-background">
        <div className="footer-react-container">
          <strong>Made with react</strong>
          <img src={reactSpinner} className="footer-icon-react" />
        </div>
        <div className="footer-icon-container">
          <a href="https://github.com/dk03" target="_blank" >
            <img src={Github} className="footer-icon-react" />
          </a>
          <CV darkMode />
          <a href="https://www.linkedin.com/in/daniel-kentfield" target="_blank" >
            <img src={Linkedin} className="footer-icon-react" />
          </a>
        </div>
      </div>
  );
};
