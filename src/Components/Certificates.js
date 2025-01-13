import React, { useEffect, useState, useRef } from 'react';
import '../resources/styling/gridbox.css';

function Certificates() {

    const [certificateSelected, setCertificateSelected] = useState(null);
    const enlargedCertificate = useRef(null);

    /* Create a list of Certificates for the Gallery */

    const [certificateList, setCertificateList] = useState([
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
    
    ])

    // Helper Function for the Sorting Methods
    const parseDate = (dateString) => {
        const [month, year] = dateString.split(" ");
        // No specific Date of the Month given, means the first Number of the Month would be used instead
        return new Date(`${month} 1, ${year}`);
    };
    
    // Sorting Methods for the Certificates
    const handleCertificateSorting = (optionSelected) => {
        let sortedList = [];

        if (optionSelected === "Alphabetical Name") {
            sortedList = [...certificateList].sort((a, b) => 
                a.certificateName.toLowerCase().localeCompare(b.certificateName));
        }
        else if (optionSelected === "Ascending Date") {
            sortedList = [...certificateList].sort((a, b) => 
                // If result is Negative then 'a' would be older
                parseDate(a.date) -  parseDate(b.date));
        }
        else if (optionSelected === "Descending Date") {
            // Reverse Sorting Method used for Ascending Date
            sortedList = [...certificateList].sort((a, b) => 
                parseDate(b.date) - parseDate(a.date));
        }
        
        // Update the Certificate List
        setCertificateList(sortedList);

    }

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
                <div className='grid-item center-grid' style = {{padding: '20px'}}>
                    <select className = "sorting-dropbox" onChange={(e) => {
                        handleCertificateSorting(e.target.value);
                    }}>
                        <option value="Alphabetical Name" selected> Sort By: Alphabetical Name </option>
                        <option value="Ascending Date"> Sort By: Ascending Date </option>
                        <option value="Descending Date"> Sort By: Descending Date </option>
                    </select>
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