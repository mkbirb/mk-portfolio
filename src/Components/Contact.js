import React, { useEffect, useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import '../resources/styling/gridbox.css';
import '../resources/styling/contact.css';

function Contact() {
    // EmailJS was used for the Email Sending: https://dashboard.emailjs.com/admin

    const [contactForm, setContactForm] = useState(
        {
            name: "",
            email: "",
            message: "",
        }
    )

    const handleChange = (e) => {
        const {name, value} = e.target;

        setContactForm({
            ...contactForm,
            // Change the Value of the Element that has called this
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        // Prevents default page submission reload
        e.preventDefault();

        // Uses EmailJs for the Email being sent directly to Matthews Email Address
        // Without the need of the users email client to open
        emailjs
        .sendForm("service_u5nti1c", "template_x213vk9", e.target, "BZT1u0NTDjQIUuCTu")
        .then(
          (result) => {
            console.log("Email Message Sent Successfully:", result.text);
            alert("Your Email to Matthew has been sent! Thankyou!");
          },
          (error) => {
            console.error("Error sending Email message:", error.text);
            alert("Failed to send Email message. Please try again later.");
          }
        );
    };

    return (
        <>
            <div className='contact-box' id = "contact">
                <form onSubmit={handleSubmit}>
                    <div className='double-grid-container'>
                            <div className='grid-item'>
                                <p className='section-title'> Contact</p>
                                <p className='description'> Lets Connect! </p>
                            </div>
                            <div className='grid-item'>
                                <div className='single-grid-container contact-form'>
                                <div className='grid-item center-grid'>
                                    <label htmlFor='email'> Email: </label>
                                </div>
                                <div className='grid-item center-grid'>
                                    <input 
                                            type = "email"
                                            name = "email"
                                            value = {contactForm.email}
                                            onChange = {handleChange}
                                            placeholder = "Your Email"
                                            required
                                            />
                                </div>
                                <div className='grid-item center-grid'>
                                    <label htmlFor='company'> Company: </label>
                                </div>
                                <div className='grid-item center-grid'>
                                    <input 
                                        type = "company" 
                                        name = "company"
                                        value = {contactForm.company}
                                        onChange = {handleChange}
                                        placeholder= "Your Company"/>
                                </div>
                                <div className='grid-item center-grid'>
                                    <label htmlFor='text'> Message: </label>
                                </div>
                                <div className='grid-item center-grid'>
                                    <textarea 
                                        name = "message"
                                        value = {contactForm.message}
                                        onChange = {handleChange}
                                        placeholder = "Your Email Message"
                                        required/>
                                </div>
                                <div className='grid-item center-grid padding'>
                                    <button type="submit">Send Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Contact;