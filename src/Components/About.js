import React, { useContext } from "react";
import { HashLink as Link } from "react-router-hash-link";
import '../resources/styling/gridbox.css';
import '../resources/styling/about.css';
import { OffsetScroll } from "./Home.js";
import MatthewPicture from '../resources/images/matthew-white-shirt.png';

function About() {
    const { scrollWithOffset } = useContext(OffsetScroll);

    return (
        <>  
        
            <div className='about-section'>
                <div className='double-grid-container center-grid'>
                    <div className='grid-item'>
                        <div className='single-grid-container'>
                            <div className='grid-item'>
                                <p className='center-grid title-name'> I am Matthew Kristanto </p>
                            </div>
                            <div className='grid-item center-grid'>
                                <Link to= '#contact' smooth scroll={scrollWithOffset}>
                                    <button> Contact Me</button>
                                </Link>
                            </div>
                            <div className='grid-item center-grid'>
                                <p className='center-grid quote'> "Determination builds growth, hardship builds motivation"</p>
                            </div>
                            <div className='grid-item center-grid'>
                                <p className='center-grid self-description'> Aspiring Software Engineer undertaking Bachelors of Software Engineering at RMIT University. 
                                I am passionate about coding and developing software that has a positive influence on other peoples lives, 
                                with the desire to surround myself with a supportive, collaborative and encouraging environment. Afterall, a team can only suceeed when a strong harmonious environment is achieved. </p>
                            </div>
                        </div>
                    </div>
                    <div className='grid-item'>
                        <img src = {MatthewPicture} alt = "Matthew Picture" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;