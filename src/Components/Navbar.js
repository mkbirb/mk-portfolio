import React, { useContext } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { OffsetScroll } from "./Home.js";
import '../resources/styling/navbar.css';

function Navbar() {

    const { scrollWithOffset } = useContext(OffsetScroll);

    function LinkNavigation(props) {
        return (
            <>
                <Link to={`#${props.idName}`} smooth scroll={scrollWithOffset}>
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