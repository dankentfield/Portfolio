import React from "react";
import heroImg from "../../assets/images/heroMin.jpg";
import "./index.css";
const Header = "<FullStackDev />";
// const Header = "Class Daniel extends FullStackDeveloper"

const curlyBraceLeft = "{";
const curlyBraceRight = "}";

const Hero = () => {
  return (
    <div className="hero-container">
      <img
        className="heroImg"
        src={heroImg}
        alt="Laptop with code on the screen."
      />
      <div className="heroContainer">
        <h1 className="hero-header">{Header}</h1>
      </div>

      <div className="subHeader">
        <p className="const">const </p>mySkills = {curlyBraceLeft}
        <br />
        <div className="subHeaderInnerObj">
          &nbsp;&nbsp; React: <p className="const">true</p>,<br />
          &nbsp;&nbsp; ReactNative: <p className="const">true</p>,<br />
          &nbsp;&nbsp; Redux: <p className="const">true</p>,<br />
          &nbsp;&nbsp; HTML5: <p className="const">true</p>,<br />
          &nbsp;&nbsp; CSS3: <p className="const">true</p>,<br />
          &nbsp;&nbsp; ES6Javascript: <p className="const">true</p>,<br />
        </div>
        <div className="subHeaderInnerObj">{curlyBraceRight};</div>
      </div>
    </div>
  );
};
export default Hero;
