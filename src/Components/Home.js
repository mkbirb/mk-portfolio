import React from 'react';
import BirdImage from '../resources/images/bird.png';
import '../resources/styling/gridbox.css';
import '../resources/styling/animations.css';
import '../resources/styling/home.css';
import Navbar from './Navbar';
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

function Home() {
    return (
        <>
            <div>
                <Navbar />
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
            <p> Projects </p>
            <p> Sunshine for</p>
            <p> Sunshine for</p>
            <p> Sunshine for</p>
            <p> Sunshine for</p>
            <p> Sunshine for</p>
            <p> Sunshine for</p>
            <p> Sunshine for</p>
            <p> Sunshine for</p>
            <p> Sunshine for</p>
            <p> Sunshine for</p>
            <p> Sunshine for</p>
            <p> Sunshine for</p>
            <p> Sunshine for</p>
            <p> Sunshine for</p>
            <p> Sunshine for</p>
            <p> Sunshine for</p>
            <p> Sunshine for</p>
            <p> Sunshine for</p>
            <p> Sunshine for</p>
            <p> Sunshine for</p>
            <p> Sunshine for</p>
            <p> Sunshine for</p>
            <p> Sunshine for</p>
            <p> Sunshine for</p>
            <p> Sunshine for</p>
            <p> Sunshine for</p>
            <p> Sunshine for</p>
            <p> Sunshine for</p>

        </>
    );
}

export default Home;