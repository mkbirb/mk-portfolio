import React from 'react';
import '../resources/styling/gridbox.css';
import '../resources/styling/languages.css';
import '../resources/styling/home.css';
import HtmlIcon from '../resources/images/html-5.png';
import CssIcon from '../resources/images/css-3.png';
import JsIcon from '../resources/images/js.png';
import JavaIcon from '../resources/images/java.png';
import MySQLIcon from '../resources/images/sql-server.png';
import PythonIcon from '../resources/images/python.png';
import CSharpIcon from '../resources/images/c-sharp.png';
import CPlusIcon from '../resources/images/c-plusplus.png';
import AngularIcon from '../resources/images/angular.png';
import ReactIcon from '../resources/images/react.png';


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
                    <div className='grid-item center-grid language-name language-study'>
                        {props.learnt === 'self' ? (<p>Self Studied</p>) : props.learnt === 'uni' ? (<p> Learnt during Studies</p>) : (<p>Unknown Learning Source</p> )}
                    </div>
                    <p className='center-grid language-name'> {props.language} </p>
                </div>
            </>
        )
    }

    return (
        <>
        <div className='languages-section'>
            <div className='single-grid-container'>
                    <div className='grid-item center-grid'>
                        <p className='section-title'> Programming Languages </p>
                    </div>
                    <div className='grid-item center-grid'>
                        <p className='description'> Experiences in the following Languages: </p>
                    </div>
                </div>
                <div className='grid-container'>
                    <SingleLanguage language = "HTML" image = {HtmlIcon} learnt = "uni"/>
                    <SingleLanguage language = "CSS" image = {CssIcon} learnt = "uni" />
                    <SingleLanguage language = "Javascript" image = {JsIcon} learnt = "uni" />
                    <SingleLanguage language = "Java" image = {JavaIcon} learnt = "uni" />
                    <SingleLanguage language = "MySQL" image = {MySQLIcon} learnt = "uni" />
                    <SingleLanguage language = "Python" image = {PythonIcon} learnt = "uni" />
                    <SingleLanguage language = "C#" image = {CSharpIcon} learnt = "self" />
                    <SingleLanguage language = "C++" image = {CPlusIcon} learnt = "uni" />
                    <SingleLanguage language = "Angular" image = {AngularIcon} learnt = "self" />
                    <SingleLanguage language = "React" image = {ReactIcon} learnt = "uni" />
            </div>
        </div>
        </>

    );
}

export default Languages;