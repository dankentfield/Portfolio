import gymTrackerAndroid from "../../assets/images/gym-tracker-android.png";
// import gymTrackerAndroid from "../../assets/images/gymtracker.gif";
import nodeLogo from "../../assets/images/node.png";
import nginxLogo from "../../assets/images/nginx-logo.svg";
import reactLogo from "../../assets/images/react-logo";
import awsLogo from "../../assets/images/aws.png";
import mongoLogo from "../../assets/images/mongo-logo-white.svg";
import githubLogo from "../../assets/images/github-logo-dark.png";
import React from "react";

const githubLinkGymTracker = "https://github.com/dk03/gym-tracker-react-native";

const GymTrackerProject =
  () => (
    <div className="project-item white-background">
      <div className="project-description-container" >
        <h1>GymTracker</h1>
        <div className='tech-used-icon-container'>
          <img className='tech-used-icon' src={nodeLogo} alt='Node js logo' />
          <img className='tech-used-icon' src={nginxLogo} alt='NGINX logo' />
          <img className='tech-used-icon' src={mongoLogo} alt='MongoDB logo' />
          <img className='tech-used-icon' src={reactLogo} alt='React logo' />
          <img className='tech-used-icon' src={awsLogo} alt='AWS logo' />
        </div>
        <div className='project-one-description-container'>
          <p>MVP Android app written in React Native - for personal use to record workouts in the gym.
            Hooked into a Node-Express server hosted on AWS EC2 running NGINX.</p>
          <p>The app persists its data in Mongo Atlas.</p>
          <div className="tech-stack-container">
            <div className="tech-stack-item">
              <h2>Frontend: </h2>
              <li>React Native</li>
              <li>Redux</li>
            </div>
            <div className="tech-stack-item">
              <h2>Backend: </h2><p></p>
              <li>AWS EC2</li>
              <li>NGINX</li>
              <li>DynamoDB</li>
              <li>API Gateway</li>
              <li>MongoDB</li>
            </div>
          </div>
          <div className="github-container">
            <a href={githubLinkGymTracker} target="_blank" className="github-container no-style">
              <img src={githubLogo}/>
              <p className="github-text"> - View code here</p>
            </a>
          </div>

        </div>
      </div>

      <div className="project-image-container">
        <img className="project-screenshot" src={gymTrackerAndroid} alt="Screenshot of the gym tracker react native app." />
      </div>
    </div>);

export default GymTrackerProject;
