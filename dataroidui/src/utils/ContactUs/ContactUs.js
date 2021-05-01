import React from 'react';
import './ContactUs.css';
import PhonelinkRingIcon from '@material-ui/icons/PhonelinkRing';
import EmailIcon from '@material-ui/icons/Email';

function ContactUs() {
    return (
        <div className="contact-us">
            <div className="contact-number-email">
                <div className="contact-number">
                    <PhonelinkRingIcon />
                    <p>Mobile Number</p>
                    <strong>+91 1234568790</strong>
                </div>
                <div className="contact-email">
                    <EmailIcon/>
                    <p>Email Us</p>
                    <strong>rahulvishwakarma6189@gmail.com</strong>
                </div>
            </div>
            <div className="contact-form">
            </div>
        </div>
    )
}

export default ContactUs;
