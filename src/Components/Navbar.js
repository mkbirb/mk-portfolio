import React from 'react';
import { HashLink as Link } from "react-router-hash-link";
import '../resources/styling/navbar.css';

function Navbar() {
    function scrollWithOffset(el) {
        // Pixel Offset, so that when a Component/Section is navigated to, the view goes a few pixels
        // Above the Componenet, so none of the contents are cut off by the Navbar
        const yOffset = -115; 
        const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
    }

    function LinkNavigation(props) {
        return (
            <>
                <Link to={`#${props.idName}`} smooth scroll={(el) => scrollWithOffset(el)}>
                    <button className='navbar-buttons'> {props.title} </button>
                </Link>
            </>
        )
    }
    return (
        <>
            <div class="navbar">
                <Link to='#top' smooth scroll={(el) => scrollWithOffset(el)}>
                    <button className='home-button'> Matthew Kristanto </button>
                </Link>
                <LinkNavigation title = "Languages" idName = "languages" />
                <LinkNavigation title = "Certificates" idName = "certificates" />
                <LinkNavigation title = "Software Experiences" idName = "softwareExperiences" />
                <LinkNavigation title = "Work Experiences" idName = "workExperiences" />
                <LinkNavigation title = "Skills" idName = "skills" />
                <LinkNavigation title = "Achievements" idName = "achievements" />
            </div>
        </>
    );
}

export default Navbar;