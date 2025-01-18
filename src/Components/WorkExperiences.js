import React from 'react';
import '../resources/styling/gridbox.css';
import BelgraviaLeisure from '../resources/images/belgravia-leisure-logo.png';
import Encompass from '../resources/images/encompass-church-logo.jpg';
import PaidLogo from '../resources/images/paid.png';
import VolunteerLogo from '../resources/images/volunteer.png';


function WorkExperiences() {

    const workplacesList = [
        {
            workplaceName: "Belgravia Leisure",
            image: BelgraviaLeisure,
            type: "Paid",
            duration: "July 2021",
            description: "Worked as a Swimming Teacher who encourages students through strong communication skills to become the best students that they can be"
        },
        {
            workplaceName: "Encompass",
            image: Encompass,
            type: "Free",
            duration: "Jan 2016 - Jan 2017",
            description: "Volunteered to take orders at the Cash Register from Customers Volunteered"
        }
    ]
    return (
        <>
            <div className='single-container work-experiences'>
                <div className='grid-item center-grid'>
                    <p className='section-title'> Work Experiences </p>
                </div>
                <div className='grid-item center-grid'>
                    <p className='description'> The following are places that I have worked or volunteered at</p>
                </div>
                {workplacesList.map((workplace, index) => {
                    return (
                        <>
                            <div className='grid-item center-grid workplaces'>
                                <div className='double-grid-container work-box'>
                                    <div className='grid-item work-elements'>
                                        <img className='workplace-logo' src = {workplace.image} alt= {`${workplace.workplaceName} Icon`} />
                                    </div>
                                    <div className='grid-item work-elements'>
                                        <p className='work-name'> {workplace.workplaceName} </p>
                                        <p className='work-duration'> Since {workplace.duration} </p>
                                        <p className='work-description'> {workplace.description} </p>
                                        <div className='double-grid-container center-grid'>
                                                <div className='grid-item work-type'>
                                                    {workplace.type == "Paid" ? (<img className = "work-type-logo" src = {PaidLogo} alt = {workplace.type} />) : workplace.type== "Free" ? (<img className = "work-type-logo" src={VolunteerLogo} alt = {workplace.type} />) : (<p> Unknown Work Type </p>)}
                                                </div>
                                                <div className='grid-item work-type'>
                                                    <p className='work-type'> <b> Type: </b> {workplace.type} </p>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    );
}

export default WorkExperiences;