import React,{ Component } from 'react';
import './ContactUs.css';
import PhonelinkRingIcon from '@material-ui/icons/PhonelinkRing';
import EmailIcon from '@material-ui/icons/Email';
import ContactUsForm from './ContactUsForm';

class ContactUs extends Component {

    componentDidMount() {
        document.title = 'Contact Us - Leading B2B Database Provider in India';
    }

    render() {
        return (
            <div className="contact-us">
                <div className="contact-number-email">
                    <div className="contact-number">
                            <PhonelinkRingIcon style={{"font-size":"40px","color":"#023e8a"}}/>
                            <p>Mobile Number</p>
                            <strong>+91 9167279641</strong>
                    </div>
                    <div className="contact-email">
                            <EmailIcon style={{"font-size":"40px","color":"#d62828"}}/>
                            <p>Email Us</p>
                            <strong>rahulvishwakarma6189@gmail.com</strong>
                    </div>
                </div>
                <div className="contact-form">
                        <ContactUsForm/>
                </div>
            </div>
        )
    }
}

export default ContactUs;
