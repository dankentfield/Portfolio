import React from 'react';
import PropTypes from 'prop-types';

import Github from '../../assets/images/github-icon.png'
import Resume from '../../assets/images/cv-logo-white.png'
import Linkedin from '../../assets/images/linkedin.png'
import MediumIcon from '../../assets/images/medium-icon.png'
import CV from "../../assets/DanielKentfieldCV.pdf";

const NavBar =
  () => {
        return (
            <div className="container">
                <div className="icon-container">
                    <img src={Github} className="icon" />
                    <img src={Resume} className="icon" />
                    <img src={Linkedin} className="icon" />
                    <img src={CV} className="icon" />
                    <img src={MediumIcon} className="icon" />
                </div>
            </div>
        );
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default NavBar;