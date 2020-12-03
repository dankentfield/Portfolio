import React from 'react';
import PropTypes from 'prop-types';

import Github from '../../assets/images/github-icon.png'
import Resume from '../../assets/images/cv-logo-white.png'
import Linkedin from '../../assets/images/linkedin.png'
import MediumIcon from '../../assets/images/medium-logo-white.png'
import CV from "../../assets/DanielKentfieldCV.pdf";

const NavBar =
  () => {
        return (
            <div className="container">
                <div className="icon-container">
                  <a href="https://github.com/dk03" target="_blank" >
                    <img src={Github} className="icon" />
                  </a>
                  <a href={CV} target="_blank" >
                    <img src={Resume} className="icon" />
                  </a>
                  <a href="https://www.linkedin.com/in/daniel-kentfield" target="_blank" >
                    <img src={Linkedin} className="icon" />
                  </a>
                  {/*<a href="https://medium.com/@danielkent03" target="_blank" >*/}
                  {/*  <img src={MediumIcon} className="icon" />*/}
                  {/*</a>*/}
                </div>
            </div>
        );
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default NavBar;