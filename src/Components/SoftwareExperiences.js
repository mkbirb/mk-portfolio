import React from 'react';
import '../resources/styling/gridbox.css';
import '../resources/styling/softwareExperiences.css';
import VisualStudioIcon from '../resources/images/visual-studio-logo.png';
import GithubIcon from '../resources/images/github-logo.png';
import JiraIcon from '../resources/images/jira-logo.png';
import SpiraplanIcon from '../resources/images/spiraplan-logo.png';
import SeleniumIcon from '../resources/images/selenium-logo.png';
import WindowsIcon from '../resources/images/windows-logo.png';
import CucumberIcon from '../resources/images/cucumber-logo.png';
import CanvaIcon from '../resources/images/canva-logo.png';
import EclipseIcon from '../resources/images/eclipse-logo.png';
import IntelliJIcon from '../resources/images/intelliJ-logo.png';
import GoogleDriveIcon from '../resources/images/google-drive-logo.png';
import MiroIcon from '../resources/images/miro-logo.png';
import GoogleSitesIcon from '../resources/images/google-sites-logo.png';
import WeeblyIcon from '../resources/images/weebly-logo.png';
import SpringbootIcon from '../resources/images/springboot-logo.png';


function SoftwareExperiences() {
    function IndividualSoftware(props) {
        // Returns the format for the Individual Software Experiences that have been encountered
        return (
            <>
                <div className='double-grid-container software-experiences'>
                    <div className='grid-item center-grid'>
                        <img src={props.image} alt= {`${props.name} Icon`} />
                    </div>
                    <div className='grid-item center-grid'>
                        <p className='software-titles'> {props.name} </p>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <div className='single-grid-container software-experiences-section'>
                <div className='grid-item center-grid'>
                    <p className='section-title'> Software Experiences </p>
                </div>
                <div className='grid-item center-grid'>
                    <p className='description'> The following indicates the Softwares I have used relating to the Software Field</p>
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
                                <div className='grid-item center-grid'>
                                    <IndividualSoftware name = "Spiraplan" image = {SpiraplanIcon} />
                                </div>
                                <div className='grid-item center-grid'>
                                    <IndividualSoftware name = "Selenium" image = {SeleniumIcon} />
                                </div>
                                <div className='grid-item center-grid'>
                                    <IndividualSoftware name = "Windows" image = {WindowsIcon} />
                                </div>
                                <div className='grid-item center-grid'>
                                    <IndividualSoftware name = "Cucumber" image = {CucumberIcon} />
                                </div>
                                <div className='grid-item center-grid'>
                                    <IndividualSoftware name = "Canva" image = {CanvaIcon} />
                                </div>
                                <div className='grid-item center-grid'>
                                    <IndividualSoftware name = "Eclipse" image = {EclipseIcon} />
                                </div>
                                <div className='grid-item center-grid'>
                                    <IndividualSoftware name = "IntelliJ" image = {IntelliJIcon} />
                                </div>
                                <div className='grid-item center-grid'>
                                    <IndividualSoftware name = "Google Drive" image = {GoogleDriveIcon} />
                                </div>
                                <div className='grid-item center-grid'>
                                    <IndividualSoftware name = "Springboot" image = {SpringbootIcon} />
                                </div>
                                <div className='grid-item center-grid'>
                                    <IndividualSoftware name = "Miro" image = {MiroIcon} />
                                </div>
                                <div className='grid-item center-grid'>
                                    <IndividualSoftware name = "Google Sites" image = {GoogleSitesIcon} />
                                </div>
                                <div className='grid-item center-grid'>
                                    <IndividualSoftware name = "Weebly" image = {WeeblyIcon} />
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