import React from 'react';
import '../resources/styling/gridbox.css';
import '../resources/styling/home.css';
import HtmlIcon from '../resources/images/html-5.png';
import CssIcon from '../resources/images/css-3.png';
import JsIcon from '../resources/images/js.png';


function Languages() {

    function SingleLanguage (props) {
        /* Function that allows the adding of a Programming Language into the format */
        return (
            <>
                <div className='grid-item'>
                    <div className='grid-item center-grid'>
                        <div className='grid-item center-grid language-card'>
                            <img className="language-icon" src = {props.image} alt = {`${props.language} Icon`} />
                        </div>
                    </div>
                    <hr style = {{height: '5px', backgroundColor: 'black', width: '50px'}}/>
                    <div className='grid-item center-grid'>
                        {props.learnt === 'self' ? (<p>Self Studied</p>) : props.learnt === 'uni' ? (<p> Learnt during Studies</p>) : (<p>Unknown Learning Source</p> )}
                    </div>
                    <p className='center-grid'> {props.language} </p>
                </div>
            </>
        )
    }

    return (
        <>
        <div className='landing-background '>
            <div className='single-grid-container'>
                    <div className='grid-item center-grid'>
                        <p className='description'> Programming Languages </p>
                    </div>
                    <div className='grid-item center-grid'>
                        <p className='description'> Experiences in the following Languages: </p>
                    </div>
                </div>
                <div className='grid-container'>
                    <SingleLanguage language = "HTML" image = {HtmlIcon} learnt = "uni"/>
                    <SingleLanguage language = "CSS" image = {CssIcon} learnt = "uni" />
                    <SingleLanguage language = "Javascript" image = {JsIcon} learnt = "uni" />
            </div>
        </div>
        </>

    );
}

export default Languages;