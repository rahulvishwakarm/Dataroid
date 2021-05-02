import React from 'react';
import './ContactUsForm.css';

function ContactUsForm() {
    return (
        <div className="contactusform-main">
            <div className="contactusform-header">
                <h2>We're Here To Help</h2>
                <p>Please fill enquiry form with your contact detail for your requirement so that we will contact you. You can also reach us on our email id and contact number. We are happy to assist you.</p>
            </div>
            <div className="contactusform-form">
                    <div className="row" style={{"margin-left":"180px","margin-right":"180px"}}>
                        <div className="col-sm" >
                            <input type="text" name="your-name" placeholder="Enter Your Name*" size="55" />
                        </div>
                        <div className="col-sm">
                            <input type="email" name="office-email" placeholder="Enter Office Email Id*" size="55"/>
                        </div>
                    </div><br></br>
                    <div className="row" style={{"margin-left":"180px","margin-right":"180px"}}>
                        <div className="col-sm" >
                            <input type="text" name="job-title" placeholder="Enter Job Title*" size="55"/>
                        </div>
                        <div className="col-sm">
                            <input type="text" name="company-name" placeholder="Enter Company Name*" size="55"/>   
                        </div>
                    </div><br></br>
                    <div className="row" style={{"margin-left":"180px","margin-right":"180px"}}>
                        <div className="col-sm" >
                            <input type="tel" name="mobile-number" placeholder="Enter Mobile Number*" size="55" />
                        </div>
                        <div className="col-sm">
                            <input type="text" name="city" placeholder="Enter City*" size="55" />   
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default ContactUsForm;
