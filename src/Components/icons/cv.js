import React from 'react';

import cv from "../../assets/DanielKentfieldCV.pdf";


const CV =
  ({
    darkMode = false,
   }) =>
  {
    const colourClass =
      darkMode
        ? 'dark-cv-icon'
        : 'light-cv-icon';

    const iconContainerClass =
      `cv-circle ${colourClass}`;

  return (
      <a href={cv} target="_blank" className="no-style">
        <div className={iconContainerClass} >
          <strong >CV</strong>
        </div>
      </a>
    );
  }

export default CV;
