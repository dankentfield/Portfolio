import React from "react";
import "./index.css";
import githubLogo from "../../assets/images/github-logo.png";
import cvLogo from "../../assets/images/cv-logo.svg";
import reactSpinner from "../../assets/images/logo.svg";
import BgImage from "../../assets/images/footer-desk.jpg";

export default () => {
    return (
        <div>

           <div className='img-container'> <img className="background-image" src={BgImage} alt='Desk with a laptop.' /></div>
            <div className="footer-container">
                <h1>More about me:</h1>
                <div className="footer-items-container">
                    <div className="footer-item">
                        <h2>Git Hub</h2>
                        <a href='https://github.com/dk03'><img className='logo' src={githubLogo} alt="Github logo" /></a>
                    </div>
                    <div className="footer-item">
                        <h2>CV/ Resume</h2>
                        <img className='logo' src={cvLogo} alt="Resume logo" />{" "}
                    </div>
                </div>
                <div className='footer-react-attr'> <h3>Made with React</h3><img className='logo' src={reactSpinner} alt='React logo' /></div>
            </div>
        </div>
    );
};
