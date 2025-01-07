import React from 'react';
import BirdImage from '../resources/images/bird.png';
import '../resources/styling/gridbox.css';
import '../resources/styling/animations.css';
import '../resources/styling/home.css';
import Navbar from './Navbar';
import Languages from './Languages';

function Home() {
    return (
        <>
            <Navbar />
            <Languages />
            <div className="single-grid-container center-grid">
                <img className="bird-flying" src={BirdImage} alt = "Bird Image"/>
            </div>
            <div className="single-grid-container center-grid">
                <p> Matthew Kristanto</p>
            </div>
            <p> Work Experience</p>
            <p> Skills</p>
            <p> Achievements</p>
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
            <p> Sunshine for</p>

        </>
    );
}

export default Home;