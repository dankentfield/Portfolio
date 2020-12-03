import React from 'react'
import './index.css'
import reactLogo from "../../assets/images/react-logo.js";
import reduxLogo from '../../assets/images/reduxlogo.png'
import awsLogo from '../../assets/images/aws.png'
import typescriptLogo from '../../assets/images/typescript.png'
import javaLogo from '../../assets/images/java.png'
import nodeLogo from '../../assets/images/node.png'

export default () => {
  return (
    <div className=''>

      <h3>My current technology stack:</h3>
      <div className='skills-container'>
      <div className='skill-item '>
            <img className='logo' src={javaLogo} alt='Java logo' />
          </div>

          <div className='skill-item '>
            <img className='logo' src={nodeLogo} alt='Node js logo' />
          </div>

          <div className='skill-item '>
            <img className='logo' src={reactLogo} alt='React logo' />
          </div>


          <div className='skill-item '>
            <img className='logo' src={reduxLogo} alt='Redux logo' />
          </div>

          <div className='skill-item '>
            <img className='logo' src={typescriptLogo} alt='Typescript logo' />
          </div>

          <div className='skill-item '>
            <img className='logo' src={awsLogo} alt='Amazon web services logo' />
          </div>

    </div>
    </div>
  )
}
