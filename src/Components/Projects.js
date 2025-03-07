import React, {useState, useRef } from 'react';
import '../resources/styling/gridbox.css';
import '../resources/styling/projects.css';
import MkPortfolioSkills from '../resources/images/mk-portfolio-skills.png';
import MkPortfolioWorkExperiences from '../resources/images/mk-work-experiences.png';
import BankManagementCode from '../resources/images/bank-management-code.png';
import JMeterGraphResults from '../resources/images/jmeter-graph-results.png';
import JMeterResultsTree from '../resources/images/jmeter-results-tree.png';
import SeleniumSpiraplan from '../resources/images/selenium-spiraplan.png';
import SeleniumTestCases from '../resources/images/selenium-test-cases.png';
import CucumberCode from '../resources/images/cucumber-code.png';
import JMeterVideo from "../resources/videos/parabank-jmeter-video.mp4";
import SeleniumVideo from "../resources/videos/parabank-selenium-video.mp4";
import CucumberVideo from  "../resources/videos/parabank-cucumber-video.mp4"

function Projects() {
    const [activeTab, setActiveTab] = useState(0);
    const ProjectDetails = [
        {
            title: "MK Portfolio",
            description: "A Single Page Application built using React, HTML and CSS that provides an insight on who Matthew Kristanto is",
            githubLink: "https://github.com/mkbirb/mk-portfolio",
            images: [MkPortfolioSkills, MkPortfolioWorkExperiences],
            video: ""
        },
        {
            title: "Bank Management Testing",
            description: "Unit Tests using JUnit for a Bank Management Software created by someone else, where the Tests that have not passed would identify the improvements that the original developer would need to implement to make the Bank Management Application better",
            githubLink: "https://github.com/mkbirb/bank-management",
            images: [BankManagementCode],
            video: ""
        },
        {
            title: "Parabank JMeter",
            description: "Performance Testing on the Parabank Website: https://parabank.parasoft.com/parabank/index.htm",
            githubLink: "https://github.com/mkbirb/parabank-jmeter",
            images: [JMeterGraphResults, JMeterResultsTree],
            video: JMeterVideo
        },
        {
            title: "Parabank Selenium",
            description: "Selenium Web Automation Testing on the Parabank Website: https://parabank.parasoft.com/parabank/index.htm. This is where each of the Test Case Results would be displayed on Spiraplan.",
            githubLink: "https://github.com/mkbirb/parabank-selenium",
            images: [SeleniumSpiraplan, SeleniumTestCases],
            video: SeleniumVideo
        },
        {
            title: "Parabank Cucumber",
            description: "Behaviour Driven Development (BDD) Testing to focus on describing the Parabank Website: https://parabank.parasoft.com/parabank/index.htm , in a human readable format",
            githubLink: "https://github.com/mkbirb/parabank-cucumber",
            images: [CucumberCode],
            video: CucumberVideo
        }
    ]
    return (
        <>
            <div className='projects-box'>
                <div className='single-grid-container'>
                    <div className='grid-item center-grid'>
                        <p className='section-title'> Projects </p>
                    </div>
                    <div className='grid-item center-grid'>
                        <p className='description'> The following displays the Projects that I have worked on </p>
                    </div>
                </div>
                <div className='double-grid-container'>
                    <div className='grid-item'>
                        <div className='tab'>
                            <div className=''>
                                {ProjectDetails.map((project, index) => (
                                    <div key = {index} className= {`tab-button ${activeTab === index ? "active": ""} `} onClick={() => setActiveTab(index)}>
                                        {project.title}
                                    </div>

                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='grid-item tab-content'>
                        <div className='single-grid-container'>
                            <div className='grid-item'>
                                <div className="center-grid">
                                    <p>{ProjectDetails[activeTab].description}</p>
                                </div>
                            </div>
                            <div className='grid-item'>
                                {(ProjectDetails[activeTab].githubLink.length > 0) ? 
                                    <a href = {ProjectDetails[activeTab].githubLink}><p className='center-grid'> <b> Github Link </b></p></a>
                                    :
                                    ""
                                }
                            </div>
                            {(ProjectDetails[activeTab].video.length > 0) ? 
                                <>
                                    <div className='grid-item'>
                                        <p> Video Demonstration/Explanation below: </p>
                                    </div>
                                    <div className='grid-item center-grid'>
                                        <video key={activeTab} width="600vw" height="340" controls>
                                            <source src={ProjectDetails[activeTab].video} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                </>
                                :
                                null
                            }
                            <div className='grid-item'>
                                <div className='single-grid-container'>
                                    {(ProjectDetails[activeTab].images.length > 0) ? 
                                        ProjectDetails[activeTab].images.map((image, index) => (
                                            <div className='grid-item center-grid'>
                                                  <img key = {index} src= {image} alt = {`Project image ${index + 1}`}/>
                                            </div>
                                        ))
                                        :
                                        ""
                                    }
                                </div>
                            </div>
                        </div>
                            
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;