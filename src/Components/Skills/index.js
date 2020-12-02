import React from 'react'
import './index.css'
import reactLogo from '../../assets/images/react.svg'
import reduxLogo from '../../assets/images/reduxlogo.png'
import awsLogo from '../../assets/images/aws.png'
import typescriptLogo from '../../assets/images/typescript.png'
import javaLogo from '../../assets/images/java.png'
import nodeLogo from '../../assets/images/node.png'

export default () => {
  return (
    <div className='skills-container'>

      <div className="flip-card">
        <div className="flip-card-inner">
          <div className='skill-item flip-card-front'>
            <img className='logo' src={javaLogo} alt='Java logo' />
          </div>
          <div className='skill-item flip-card-back'>
            <p>Java</p>
            <li>Spring boot</li>
            <li>Point two</li>
            <li>Point three</li>
          </div>
        </div>
      </div>

      <div className="flip-card">
        <div className="flip-card-inner">
          <div className='skill-item flip-card-front'>
            <img className='logo' src={nodeLogo} alt='Node js logo' />
          </div>
          <div className='skill-item flip-card-back'>
            <p>Node</p>
            <li>ES6</li>
            <li>Babel, webpack</li>
            <li>TDD - jest</li>
          </div>
        </div>
      </div>

       <div className="flip-card">
        <div className="flip-card-inner">
          <div className='skill-item flip-card-front'>
            <img className='logo' src={reactLogo} alt='React logo' />
          </div>
          <div className='skill-item flip-card-back'>
            <p>React & React native</p>
            <li>Point one</li>
            <li>Point two</li>
            <li>Point three</li>
          </div>
        </div>
      </div>

      <div className="flip-card">
        <div className="flip-card-inner">
          <div className='skill-item flip-card-front'>
            <img className='logo' src={reduxLogo} alt='Redux logo' />
          </div>
          <div className='skill-item flip-card-back'>
            <p>Redux</p>
            <li>Redux saga</li>
            <li>Redux persist</li>
          </div>
        </div>
      </div>

       <div className="flip-card">
        <div className="flip-card-inner">
          <div className='skill-item flip-card-front'>
            <img className='logo' src={typescriptLogo} alt='Typescript logo' />
          </div>
          <div className='skill-item flip-card-back'>
            <p>Typescript</p>
            <li>Point one</li>
            <li>Point two</li>
            <li>Point three</li>
          </div>
        </div>
      </div>


      <div className="flip-card">
        <div className="flip-card-inner">
          <div className='skill-item flip-card-front'>
            <img className='logo' src={awsLogo} alt='Amazon web services logo' />
          </div>
          <div className='skill-item flip-card-back'>
            <p>AWS</p>
            <li>Point one</li>
            <li>Point two</li>
            <li>Point three</li>
          </div>
        </div>
      </div>

    </div>
  )
}
