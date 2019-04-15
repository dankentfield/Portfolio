import React from 'react'
import heroImg from '../../assets/images/heroMin.jpg'
import './index.css'
const Header = "<FullStackDev />"
// const Header = "Class Daniel extends FullStackDeveloper"

const curlyBraceLeft = '{'
const curlyBraceRight = '}'


const Hero = () => {

    return (
        <div className="hero-container">
            <img className="heroImg" src={heroImg} alt="Laptop with code on the screen."></img>
            <div className='heroContainer' ><h1 className="hero-header">{Header}</h1></div>

            <div className='subHeader' >
                <p className='const' >const </p>mySkills = {curlyBraceLeft}<br />
                <div className='subHeaderInnerObj'>
                    &nbsp;&nbsp; React: <p className='const'>true</p>,<br />
                    &nbsp;&nbsp; Redux: <p className='const'>true</p>,<br />
                    &nbsp;&nbsp; HTML5: <p className='const'>true</p>,<br />
                    &nbsp;&nbsp; CSS3: <p className='const'>true</p>,<br />
                    &nbsp;&nbsp; Javascript: <p className='const'>true</p>,<br />

                </div>
                <div className='subHeaderInnerObj'>{curlyBraceRight};</div>
            </div>
        </div>
    )
}
// const style = {
//     heroContainer: {
//         width: '100vw',
//         height: '100vh',
//         display: 'inline-block'
//     },
//     heroImg: {
//         width: '100vw',
//         height: 'auto',
//         opacity: 0.7,
//     },
//     header: {
//         position: 'absolute',
//         left: '25vw',
//         top: '20vh',
//         zIndex: 1,
//         backgroundColor: '#3F52B5',
//         padding: 10,
//         fontSize: "5rem"
//     },
//     subHeader: {
//         position: 'absolute',
//         left: '40vw',
//         top: '40vh',
//         zIndex: 1,
//         backgroundColor: 'black',
//         opacity: 0.9,
//         padding: 50,
//         fontSize: "2rem",
//         alignItems: 'right',
//         color: 'white',

//     },
//     inline: {
//         display: 'inline',
//         whiteSpace: 'normal',
//     },
//     const: {
//         display: 'inline',
//         color: 'blue',

//     },
//     subHeaderInnerObj: {
//         textAlign: 'left'
//     }

// }
// const style = {
//         heroContainer: {
//             // width: '100vw',
//             // height: '100vh',
//             display: 'inline-block'
//         },
//         heroImg: {
//             width: '100vw',
//             height: 'auto',
//             opacity: 0.7,
//         },
//         header: {
            // position: 'absolute',
            // left: '25vw',
            // top: '20vh',
            // zIndex: 1,
            // backgroundColor: '#3F52B5',
            // padding: 10,
            // fontSize: "5rem"
//         },
//         subHeader: {
//             position: 'absolute',
//             left: '40vw',
//             top: '40vh',
//             zIndex: 1,
//             backgroundColor: 'black',
//             opacity: 0.9,
//             padding: 50,
//             fontSize: "2rem",
//             alignItems: 'right',
//             color: 'white',
    
//         },
        // inline: {
        //     display: 'inline',
        //     whiteSpace: 'normal',
        // },
        // const: {
        //     display: 'inline',
        //     color: 'blue',
    
//         },
        // subHeaderInnerObj: {
        //     textAlign: 'left'
        // }
    
//     }


export default Hero;