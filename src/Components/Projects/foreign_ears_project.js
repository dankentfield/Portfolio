import projOne from "../../assets/images/foreignears-android.png";
import nodeLogo from "../../assets/images/node.png";
import reactLogo from "../../assets/images/react-logo";
import awsLogo from "../../assets/images/aws.png";
import redisLogo from "../../assets/images/redis.png";
import githubLogo from "../../assets/images/github-logo-dark.png";
import React from "react";

const Header =
  () =>
  (
    <div className="project-header-container">
      <h1>ForeignEars</h1>
      <div className='tech-used-icon-container'>
        <img className='tech-used-icon' src={nodeLogo} alt='Node js logo' />
        <img className='tech-used-icon' src={reactLogo} alt='React logo' />
        <img className='tech-used-icon' src={awsLogo} alt='AWS logo' />
        <img className='tech-used-icon' src={redisLogo} alt='Redis logo' />
      </div>
    </div>
  );

const ForeignEarsProject =
  () => (
    <div className="project-item-container">
      <Header />
      <div className="project-item">
        <div className="project-image-container">
          <img className="project-screenshot" src={projOne} alt="Screenshot of the gym tracker react native app." />
          <div className="google-play-badge-container">
            <a href='https://play.google.com/store/apps/details?id=com.foreignears&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
              <img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' className="badge google-play-badge-container" />
            </a>
          </div>
        </div>
        <div className="project-description-container" >
          <div className='project-one-description-container'>
            <p>Foreign ears helps you to learn a language by helping you understand podcasts in your target language.
              <br/>We do this by generating transcripts for each podcast so you can read and listen at the same time,
              if you find a word you don't understand - tap it to translate it.</p>
            <p>This app was written in React Native and is supported with a complete serverless backend hosted on AWS.
              <br/>Data is managed using Redux, Redux Saga and Redux persist which is then persisted in the backend.</p>
            <div className="tech-stack-container">
              <div className="tech-stack-item">
                <h2>Frontend: </h2>
                <li>React Native</li>
                <li>Redux</li>
                <li>Redux Saga</li>
                <li>Redux Persist</li>
                <li>AWS amplify (cognito)</li>
              </div>
              <div className="tech-stack-item">
                <h2>Backend: </h2>
                <li>AWS Lambda</li>
                <li>DynamoDB</li>
                <li>SNS</li>
                <li>AWS event bridge</li>
                <li>API Gateway</li>
                <li>AWS Cognito</li>
                <li>Redis</li>
              </div>
            </div>
            <div className="github-container">
              <img src={githubLogo}/>
              <p className="github-text">Code available on request</p>
            </div>
        </div>
        </div>
      </div>
    </div>);

export default ForeignEarsProject;
