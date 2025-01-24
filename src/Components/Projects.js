import React, {useState, useRef } from 'react';
import '../resources/styling/gridbox.css';
import '../resources/styling/projects.css';
import MkPortfolioSkills from '../resources/images/mk-portfolio-skills.png';
import MkPortfolioWorkExperiences from '../resources/images/mk-work-experiences.png';

function Projects() {
    const [activeTab, setActiveTab] = useState(0);
    const ProjectDetails = [
        {
            title: "MK Portfolio",
            description: "A Single Page Application built using React, HTML and CSS that provides an insight on who Matthew Kristanto is",
            githubLink: "https://github.com/mkbirb/mk-portfolio",
            images: [MkPortfolioSkills, MkPortfolioWorkExperiences],
        },
        {
            title: "Duno",
            description: "Du",
            githubLink: "",
            images: [],
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
                            <div className='grid-item '>
                                {(ProjectDetails[activeTab].githubLink.length > 0) ? 
                                    <a href = {ProjectDetails[activeTab].githubLink}><p className='center-grid'> <b> Github Link </b></p></a>
                                    :
                                    ""
                                }
                            </div>
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