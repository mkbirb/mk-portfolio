import React from 'react';
import '../resources/styling/gridbox.css';
import '../resources/styling/animations.css';
import ADFCertificate from '../resources/images/ADF-certificate-2022.jpg';
import GlobalInnovatorAward from '../resources/images/global-innovator-award-2021.jpg';

function Achievements() {

    const achievements = [
        {
            title: "Australian Defence Force 2022 Future Innovators Award",
            issuedBy: "Australian Defence Force",
            date: "Jan 2022",
            description: "Recieved $500 in cash by “highlighting the value the Navy, Army and Air Force place on STEM skills and STEM career opportunities within Defence” as a result of developing a Visual Basic project that aims to make studying for high school students more engaging.",
            image: ADFCertificate,

        },
        {
            title: "STEM MAD SHOWCASE Communications Award Secondary Winner",
            issuedBy: "Melbourne Archdiocese Catholic Schools",
            date: "Oct 2021",
            description: "Secondary Winner in the Communications Category for a project that aims to solve the epidemic of loneliness that is experienced for several individuals within society",
            image: GlobalInnovatorAward,
        }
    ]

    function AchievementsList() {
        // Allows for the pattern of alternating between each Individual Achievement to occur, where the pattern is
        // Image would be on the left for first achievement and then image on the right for second achievement, then so on.
        function AchievementImage(achievement) {
            return ((
                <>
                    <div className='grid-item center-grid'>
                        <img className='achievement-image' src= {achievement.image} alt = {achievement.title} />
                    </div>
                </>
            ))
        }

        function AchievementDetails(achievement) {
            return ((
                <>
                    <div className='grid-item center-grid achievement-details'>
                        <p> <b> Award Title:</b> {achievement.title} </p>
                        <p> <b> Issued By: </b> {achievement.issuedBy} </p>
                        <p> <b> Date: </b> {achievement.date} </p>
                        <p> <b> Description: </b> {achievement.description}</p>
                    </div>
                </>
            ))
        }
        return achievements.map((achievement, index) => (
                <>
                    <div className='double-grid-container achievement-list center-grid' key = {index}>
                        {(index / 2 == 0) ? (
                                <>
                                {AchievementImage(achievement)}
                                {AchievementDetails(achievement)}
                                </>)
                            : (
                                <>
                                    {AchievementDetails(achievement)}
                                    {AchievementImage(achievement)}
                                </>
                            )}
                    </div>
                </>
            ));
    }
    return (
        <>
            <div className='single-grid-container achievements-box'>
                <div className='grid-item center-grid'>
                    <p className='section-title'> Achievements </p>
                </div>
                <div className='grid-item center-grid'>
                    <p className='description'> The following are the Honors and the Awards that I have achieved </p>
                </div>
                {AchievementsList()}
            </div>
        </>
    );
}

export default Achievements;