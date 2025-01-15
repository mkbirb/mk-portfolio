import React from 'react';
import '../resources/styling/gridbox.css';
import VisualStudioIcon from '../resources/images/visual-studio-logo.png';
import GithubIcon from '../resources/images/github-logo.png';
import JiraIcon from '../resources/images/jira-logo.png';

function SoftwareExperiences() {
    function IndividualSoftware(props) {
        // Returns the format for the Individual Software Experiences that have been encountered
        return (
            <>
                <img style = {{padding: '20px', height: '60px', width: '70px'}} src={props.image} alt= {`${props.name} Icon`} />
                <p> {props.name} </p>
            </>
        )
    }
    return (
        <>
            <div className='single-grid-container'>
                <div className='grid-item center-grid'>
                    <p> Software Experiences </p>
                </div>
                <div className='grid-item'>
                    <div className='single-grid-container' style = {{paddingLeft: '25%', paddingRight: '25%'}}>
                        <div className='grid-item software-experiences-box'>
                            <div className='grid-container'>
                                <div className='grid-item center-grid'>
                                    <IndividualSoftware name = "Visual Studio" image = {VisualStudioIcon} />
                                </div>
                                <div className='grid-item center-grid'>
                                    <IndividualSoftware name = "Github" image = {GithubIcon} />
                                </div>
                                <div className='grid-item center-grid'>
                                    <IndividualSoftware name = "Jira" image = {JiraIcon} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SoftwareExperiences;