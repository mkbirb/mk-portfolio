import React, { useEffect, useState, useRef } from 'react';
import '../resources/styling/gridbox.css';

function Certificates() {

    const [certificateSelected, setCertificateSelected] = useState(null);
    const enlargedCertificate = useRef(null);

    /* Create a list of Certificates for the Gallery */

    const certificateList = [
        {
            certificateName: "Angular Certificate",
            date: "December 2024",
            credentialID: "CC-WJ8LX1RT",
            image: require('../resources/images/angular-certificate.jpg')
        },
        {
            certificateName: "Introduction to Programming Using JavaScript",
            date: "July 2024",
            credentialID: "CC-BBHGDWBZ",
            image: require('../resources/images/introtojavascript-certificate.jpg')
        },
        {
            certificateName: "Javascript Intermediate",
            date: "March 2024",
            credentialID: "CC-BH8T8MTX",
            image: require('../resources/images/javascriptintermediate-certificate.jpg')
        }
    
    ]

    function SelectedCertificates(props) {
        return (
            <>
                <img src = {props.source} alt = {props.name} className="selected-certificate"/>
            </>
        )
    }

    const handleCertificateSelected = (image) => {
        setCertificateSelected(image);

        // Wait for a few seconds before the scrolling occurs, so that the proper scrolling is able to occur
        // When no certificate has been selected at the started
        setTimeout(() => {
            enlargedCertificate.current.scrollIntoView({ behavior: "smooth" });
        }, 1000);
    }


    return (
        <>
        <div className='certificates-section' >
            <div className='single-grid-container' ref = {enlargedCertificate}>
                <div className='grid-item center-grid'>
                    <p className='section-title'> Certificates </p>
                </div>
                <div className='grid-item center-grid'>
                    <p className='description'> Select Certificate to enlarge</p>
                </div>
                <div className='grid-item center-grid enlarged-certificate'>
                    {(certificateSelected == null) ? "": (<SelectedCertificates source = {certificateSelected} name = "image" />)}
                </div>
            </div>
            <div className='grid-container'>
                {/* Lists all the Certificates including the ones that have been selected */ }
                {certificateList.map((certificate, index) => (
                    <>
                    <div className='single-grid-container' key={index}>
                        <div className='grid-item center-grid'>
                            <img 
                                className = "non-selected-certificates" 
                                src = {certificate.image} 
                                alt = {certificate.certificateName} 
                                onClick = {() => handleCertificateSelected(certificate.image)}/>
                        </div>
                        <div className='grid-item center-grid'>
                            <p className='certificates-details'> <b> Certificate Name: </b> {certificate.certificateName} </p>
                        </div>
                        <div className='grid-item center-grid'>
                            <p className='certificates-details'> <b> Date: </b> {certificate.date} </p>
                        </div>
                        <div className='grid-item center-grid'>
                            <p className='certificates-details'> <b> Credential ID: </b> {certificate.credentialID} </p>
                        </div>
                    </div>
                    </>
                ))}
            
            </div>
        </div>

        </>
    );
}

export default Certificates;