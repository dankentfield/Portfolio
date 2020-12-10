import gymTrackerAndroid from "../../assets/images/gym-tracker-android.png";
import nodeLogo from "../../assets/images/node.png";
import nginxLogo from "../../assets/images/nginx-logo.svg";
import reactLogo from "../../assets/images/react-logo";
import awsLogo from "../../assets/images/aws.png";
import mongoLogo from "../../assets/images/mongo-logo-white.svg";
import githubLogo from "../../assets/images/github-logo-dark.png";
import React from "react";

const githubLinkGymTrackerApp = "https://github.com/dk03/gym-tracker-react-native";
const githubLinkGymTrackerServer = "https://github.com/dk03/gym-tracker-node-server";

const Header =
  () =>
    (
      <div className="project-header-container white-background">
        <h1>GymTracker</h1>
        <div className='tech-used-icon-container'>
          <img className='tech-used-icon' src={nodeLogo} alt='Node js logo' />
          <img className='tech-used-icon' src={nginxLogo} alt='NGINX logo' />
          <img className='tech-used-icon' src={mongoLogo} alt='MongoDB logo' />
          <img className='tech-used-icon' src={reactLogo} alt='React logo' />
          <img className='tech-used-icon' src={awsLogo} alt='AWS logo' />
        </div>
      </div>
    );


const GymTrackerProject =
  () => (
    <div className="project-item-container white-background">
      <Header />
      <div className="project-item project-reverse">
        <div className="project-description-container project-two-description-container " >
          <div className='project-one-description-container'>
            <p>MVP React Native app.</p>
            <p>Hooked into a Node-Express server hosted on AWS EC2 running NGINX.</p>

            <p>This is part of a MERN app hosted on AWS.
              The backend is a MongoDB database hosted on Mongo Atlas, accessed through a Node-Express server (running on an AWS EC2 instance).
              The initial inspiration for this project was to open up my gym data so I can monitor my fitness and gym performance more closely, importing it into a database for trend analysis (which will form another project).
            </p>
            <div className="tech-stack-container">
              <div className="tech-stack-item">
                <h2>Frontend: </h2>
                <li>React Native</li>
                <li>Redux</li>
                <li>React Navigation</li>
                <li>React native paper (component library)</li>
                <li>ES6</li>
              </div>
              <div className="tech-stack-item">
                <h2>Backend: </h2>
                <li>AWS EC2</li>
                <li>NGINX</li>
                <li>NodeJs</li>
                <li>Express Server</li>
                <li>MongoDB</li>
              </div>
            </div>
          </div>
        </div>
        <div className="project-image-container">
           <img className="project-screenshot" src={gymTrackerAndroid} alt="Screenshot of the gym tracker react native app." />

              <div className="github-group-container">
                <div className="github-container">
                    <a href={githubLinkGymTrackerApp} target="_blank" className="github-container no-style">
                      <img src={githubLogo}/>
                      <p className="github-text">App code here</p>
                    </a>
                 </div>
                <div className="github-container">
                    <a href={githubLinkGymTrackerServer} target="_blank" className="github-container no-style">
                      <img src={githubLogo}/>
                      <p className="github-text">Server code here</p>
                    </a>
                  </div>
              </div>
        </div>
      </div>
    </div>);

export default GymTrackerProject;
