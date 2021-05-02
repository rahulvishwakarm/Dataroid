import React,{ useState } from 'react';
import './ContactUsForm.css';
import {useHistory} from 'react-router-dom';
import {db} from '../../firebase';

function ContactUsForm() {
    const history = useHistory();
    const [yourName, setyourName] = useState('');
    const [companyEmail, setcompanyEmail] = useState('');
    const [jobTitle, setjobTitle] = useState('');
    const [companyName, setcompanyName] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setcity] = useState('');
    const [textArea,settextArea] = useState('');

    const formSubmit = (e) => {
        if(yourName!="") {
            if(companyEmail!="") {
                if(jobTitle!="") {
                    if(companyName!="") {
                        if(phone!="") {
                            if(city!="") {
                                if(textArea!="") {
                                    e.preventDefault();
                                    history.push('/ContactUs')
                                    //Sending Email
                                    db.collection('contacts').add({
                                        yourName:yourName,
                                        companyEmail:companyEmail,
                                        jobTitle:jobTitle,
                                        companyName:companyName,
                                        phone:phone,
                                        city:city,
                                        textArea:textArea
                                    })
                                    .then(()=>{
                                        alert("Your query has been raised!! We will contact you soon!!")
                                    })
                                    .catch(error=>{
                                        alert(error.message);
                                    });
                                    setyourName("");
                                    setcompanyEmail("");
                                    setjobTitle("");
                                    setcompanyName("");
                                    setPhone("");
                                    setcity("");
                                    settextArea("");
                                }
                                else {
                                    alert("Type some message..");
                                }
                            }
                            else {
                                alert("Please enyter your city!!");
                            }
                        }
                        else {
                            alert("Please enter phone number!!");
                        }
                    } 
                    else {
                        alert("Please enter company name!!")
                    }
                }
                else {
                    alert("Please enter job title!!")
                }
            }   
            else {
                alert("Please enter company name!!")
            }
        }
        else{
            alert("Please enter your name!!")
        }
    }

    return (
        <div className="contactusform-main">
            <div className="contactusform-header">
                <h2>We're Here To Help</h2>
                <p>Please fill enquiry form with your contact detail for your requirement so that we will contact you. You can also reach us on our email id and contact number. We are happy to assist you.</p>
            </div>
            <div className="contactusform-form">
                    <div className="row" style={{"margin-left":"180px","margin-right":"180px"}}>
                        <div className="col-sm" >
                            <input type="text" name="your-name" placeholder="Enter Your Name*" size="55"  value={yourName} onChange={e=>setyourName(e.target.value)}/>
                        </div>
                        <div className="col-sm">
                            <input type="email" name="office-email" placeholder="Enter Office Email Id*" size="55" value={companyEmail} onChange={e=>setcompanyEmail(e.target.value)}/>
                        </div>
                    </div><br></br>
                    <div className="row" style={{"margin-left":"180px","margin-right":"180px"}}>
                        <div className="col-sm" >
                            <input type="text" name="job-title" placeholder="Enter Job Title*" size="55" value={jobTitle} onChange={e=>setjobTitle(e.target.value)}/>
                        </div>
                        <div className="col-sm">
                            <input type="text" name="company-name" placeholder="Enter Company Name*" size="55" value={companyName} onChange={e=>setcompanyName(e.target.value)}/>   
                        </div>
                    </div><br></br>
                    <div className="row" style={{"margin-left":"180px","margin-right":"180px"}}>
                        <div className="col-sm" >
                            <input type="tel" name="mobile-number" placeholder="Enter Mobile Number*" size="55" value={phone} onChange={e=>setPhone(e.target.value)} />
                        </div>
                        <div className="col-sm">
                            <input type="text" name="city" placeholder="Enter City*" size="55"  value={city} onChange={e=>setcity(e.target.value)} />   
                        </div>
                    </div><br></br>
                    <div className="row" style={{"margin-left":"180px","margin-right":"180px"}}>
                        <div className="col-sm">
                            <textarea rows="8" cols="130" name="message-text" placeholder="Type Message..." value={textArea} onChange={e=>settextArea(e.target.value)} fixed/>
                        </div>
                    </div><br></br>
                    <div className="row">
                        <div className="col-4">
                            <button className="submit-button" onClick={formSubmit}>Submit</button>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default ContactUsForm;
