import React from 'react'
import projOne from '../../assets/images/react.svg'
import projTwo from '../../assets/images/react.svg'
import projThree from '../../assets/images/react.svg'
import './index.css'

export default () => {
    return (
        <div className='projects-outer-container'>
            <h1>Projects</h1>
            <div className="projects-container">
                <div className='project-item'>
                    <h2>Project 1</h2>
                    <img className='logo' src={projOne} alt=''/>
                </div>
                <div className='project-item'>
                    <h2>Project 2</h2>
                    <img className='logo' src={projTwo} alt='' />
                </div>
                <div className='project-item'>
                    <h2>Project 2</h2>
                    <img className='logo' src={projThree} alt='' />
                </div>
            </div>
        </div>
    )
}
