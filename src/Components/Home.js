import React from 'react';
import BirdImage from '../resources/images/bird.png';
import '../resources/styling/gridbox.css';
import '../resources/styling/animations.css';
import '../resources/styling/home.css';
import Navbar from './Navbar';
import About from './About';
import Languages from './Languages';
import Certificates from './Certificates';
import SoftwareExperiences from './SoftwareExperiences';
import WorkExperiences from './WorkExperiences';
import Skills from './Skills';
import Achievements from './Achievements';
import Projects from './Projects';
import Contact from './Contact';
import ScrollToTop from './ScrollToTop';
import Socials from './Socials';

function scrollWithOffset(el) {
    // Pixel Offset, so that when a Component/Section is navigated to, the view goes a few pixels
    // Above the Componenet, so none of the contents are cut off by the Navbar
    const yOffset = -115; 
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
}

const OffsetScroll = React.createContext();


function Home() {
    <head>
        {/* Website Favicon */}
        <link rel="icon" type="image/png" href="%PUBLIC_URL%/mk-favicon.png" />
    </head>
    return (
        <>
            <div>
                <OffsetScroll.Provider value={{scrollWithOffset}}>
                    <Navbar />
                    <div id='about'>
                        <About />
                    </div>
                </OffsetScroll.Provider>
                <div id='languages'>
                    <Languages />
                </div>
                <div id='softwareExperiences'>
                    <SoftwareExperiences />
                </div>
                <div id='certificates'>
                    <Certificates />
                </div>
                <div id='workExperiences'>
                    <WorkExperiences />
                </div>
                <div id='skills'>
                    <Skills />
                </div>
                <div id='achievements'>
                    <Achievements/>
                </div>
                <div id='projects'>
                    <Projects/>
                </div>
                <ScrollToTop/>
                <Socials/>
                <Contact />
            </div>
            <div className="single-grid-container center-grid">
                <img className="bird-flying" src={BirdImage} alt = "Bird Image"/>
            </div>
            <div className="single-grid-container center-grid">
                <p> Matthew Kristanto</p>
            </div>
        </>
    );
}

export default Home;

export { OffsetScroll };