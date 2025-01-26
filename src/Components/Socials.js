import React from 'react';
import '../resources/styling/gridbox.css';
import LinkedInIcon from '../resources/images/linkedin.png';
import GithubIcon from '../resources/images/github-square.png';

function Socials() {
    return (
        <>
            <div className='socials'>
                <p className='center-grid'> Socials </p>
                <div className='grid-container'>
                    <div className='grid-item'>
                        {/* Links would open at a new tab */}
                        <a href = "https://www.linkedin.com/in/matthew-kristanto-787885335/" target="_blank"> <img src = {LinkedInIcon} alt = "LinkedIn Profile" /> </a>
                    </div>
                    <div className='grid-item'>
                        <a href = "https://github.com/mkbirb" target="_blank" > <img src = {GithubIcon} alt = "Github Account" /> </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Socials;