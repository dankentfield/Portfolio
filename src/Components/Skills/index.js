import React from 'react'
import './index.css'
import reactLogo from '../../assets/images/react.svg'
import htmlLogo from '../../assets/images/HTML5_Logo.svg'
import jsLogo from '../../assets/images/jslogo.svg'
import cssLogo from '../../assets/images/csslogo.svg'
import reduxLogo from '../../assets/images/reduxlogo.png'

export default () => {
  return (
    <div className='skills-outer-container'>
      <div className='skills-container'>
        <div className='skill-item'>
          <p>React</p>
          <img className='logo' src={reactLogo} alt='' />
        </div>
        <div className='skill-item'>
          <p>HTML5</p>
          <img className='logo' src={htmlLogo} alt='' />
        </div>
        <div className='skill-item'>
          <p>Javascript</p>
          <img className='logo' src={jsLogo} alt='' />
        </div>
        <div className='skill-item'>
          <p>CSS3</p>
          <img className='logo' src={cssLogo} alt='' />
        </div>
        <div className='skill-item'>
          <p>Redux</p>
          <img className='logo' src={reduxLogo} alt='' />
        </div>

      </div>
    </div>
  )
}
