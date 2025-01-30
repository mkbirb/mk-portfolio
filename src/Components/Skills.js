import React, { useState } from 'react';
import '../resources/styling/gridbox.css';
import '../resources/styling/skills.css';
import Communication from '../resources/images/communication.png';
import Teaching from '../resources/images/teaching.png';
import Teamwork from '../resources/images/teamwork.png';
import ProjectTeamManagement from '../resources/images/planning.png';
import Motivation from '../resources/images/motivation.png';
import WorkEthic from '../resources/images/work-ethic.png';
import GrowthMindset from '../resources/images/growth-mindset.png';
import InterpersonalSkills from '../resources/images/interpersonal-intelligence.png';


function Skills() {

    

    const skillList = [
        {
            skillName: "Communication",
            description: "Throughout studying and time spent as a Swim Teacher, I have clear communication skills to effectively encourage, teach or support my students or my fellow group members for a project ",
            image: Communication,
        },
        {
            skillName: "Teaching",
            description: "Passionately helps others learn and improve themselves",
            image: Teaching,
        },
        {
            skillName: "Teamwork",
            description: "Engages with others to support members of the team. As afterall, everyone is stronger when they are part of a good team",
            image: Teamwork,
        },
        {
            skillName: "Project Team Management",
            description: "Became a Scrum Master for a project, who was responsible for managing which tasks are needed to be done by the team and when the tasks needed to be completed",
            image: ProjectTeamManagement,
        },
        {
            skillName: "Team Motivation",
            description: "Encourages team members positively to focus on the shared goal",
            image: Motivation,
        },
        {
            skillName: "Strong Work Ethic",
            description: "Has strong self motivation to complete the duties assigned for the team",
            image: WorkEthic,
        },
        {
            skillName: "Growth Mindset",
            description: "Eager to learn to improve oneself for the sake of the team",
            image: GrowthMindset,
        },
        {
            skillName: "Interpersonal Skills",
            description: "Has high social intelligence to be able to interact with others effectively, by understanding their emotions ",
            image: InterpersonalSkills,
        }

    ]

    const IndividualSkill = (skillList) => {
        const skillGroups = [];

        for (let index = 0; index < skillList.length; index++) {
            // Grid Containers are created at every fifth multiple
            if (index % 5 == 0) {
                skillGroups.push(
                    <div className='grid-container'>
                        {checkSkill(index, 3)}
                    </div>
                )
                // Increment the Index by 2, as that would mean we have added a total of 3 Grid Items
                index = index + 2;
            }
            else {
                skillGroups.push(
                    <div className='double-grid-container'>
                        {checkSkill(index, 2)}
                    </div>
                )
                
                 // Increment the Index by 1, as that would mean we have added a total of 2 Grid Items
                index = index + 1;
            }
        }
        
        return skillGroups;
    }

    const checkSkill = (index, columns) => {
         // Provides the order and the template that each individual Skill Box would be added to 

        const skillGroups = [];

        for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
            if (index < skillList.length) {
                skillGroups.push(    
                    <>
                    <div className='single-grid-container'>
                        <div className= {provideShade(columnIndex, columns)}>
                            <div className='double-grid-container'>
                                <div className='grid-item'>
                                    <img className='skills-image' src= {skillList.at(index).image} />
                                </div>
                                <div className='grid-item center-grid'>
                                    <p className='skills-title'> {skillList.at(index).skillName} </p>
                                </div>
                            </div>
                        </div>
                        <div className={provideShade(columnIndex, columns)}>
                            <p className='skills-description center-grid'> {skillList.at(index).description} </p>
                        </div>
                    </div>
                    </>                
                )

                // Increment the counter
                index++;
            }
        }

        return skillGroups;
    }

    const provideShade = (columnIndex, columns) => {
        // Provides the colour scheme for each of the Boxes that would be displayed for the individual Skills

        let className = "grid-item center-grid";
        if (columns == 3) {
            if (columnIndex == 0) {
                className += " first-shade";
            }
            else if (columnIndex == 1) {
                className += " second-shade";
            }
            else if (columnIndex == 2) {
                className += " third-shade";
            }

        }
        else {
            if (columnIndex == 0) {
                className += " fourth-shade";
            }
            else if (columnIndex == 1) {
                className += " fifth-shade";
            }
        }

        return className
    }
    return (
        <>
            <div className='single-grid-container skills'>
                <div className='grid-item center-grid'>
                    <p className='section-title'> Skills </p>
                </div>
                <div className='grid-item center-grid'>
                    <p className='description'> Skills that I have learnt or mastered throughout my studies and workplace </p>
                </div>
            </div>
            {IndividualSkill(skillList)}
        </>
    );
}

export default Skills;