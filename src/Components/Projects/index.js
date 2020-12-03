import React from "react";
import "./index.css";
import ForeignEarsProject from "./foreign_ears_project";
import GymTrackerProject from "./gym_tracker_project";

export default () => {
  return (
      <div className="projects-container" id="projects">
        <ForeignEarsProject />
        <GymTrackerProject />
    </div>
  );
};
