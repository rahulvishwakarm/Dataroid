import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap'; 
import './Register.css';

function Register(){
    const [regemail, setRegemail] = useState('');
    const [companyname, setCompany] = useState('');
    const [phone, setPhone] = useState('');
    const [regpassword, setRegpassword] = useState('');

    const register = () => {
        const emailRegex  = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if(regemail!="" & emailRegex.test(regemail)) {
            //success regemail
            if(companyname!="") {
                //success companyname
                if(phone!="") {
                    //success phone
                    if(regpassword!="") {
                        //success passwword
                    }
                    else {
                        alert("Please enter your password!!")
                    }
                }else {
                    alert("Please enter you phone number!!")
                }
            }
            else {
                alert("Please enter your company name!!")
            }
        }else {
            alert("Please enter your email in proper format!!")
        }
    }
        return (
            <div className="register-main">
                <form className="modal-content animate">
                                <div className="register-header">
                                    <h3>Register with Us</h3>
                                </div>
                                <div className="container1">
                                    <label htmlFor="emailinput"><b>Email</b></label>
                                    <input className="emailinput" type="email" placeholder="Enter Username" value={regemail} name="emailinput"  onChange={e=>setRegemail(e.target.value)} /><br></br>
                                    <label htmlFor="companynameinput"><b>Company Name</b></label>
                                    <input className="companynameinput" type="text" placeholder="Enter Username" value={companyname} name="companynameinput"  onChange={e=>setCompany(e.target.value)}  requred/><br></br>
                                    <label htmlFor="phone"><b>Phone</b></label>
                                    <input className="phone" type="tel" placeholder="Enter Username" value={phone} name="phone" onChange={e=>setPhone(e.target.value)}  /><br></br>
                                    <label htmlFor="regpasswordinput"><b>Password</b></label>
                                    <input className="regpasswordinput" type="password" placeholder="Enter Password" value={regpassword} name="regpasswordinput" onChange={e=>setRegpassword(e.target.value)}  required/><br></br>
                                        <Button className="register" color="success" onClick={register}>Register</Button>
                                </div>
                    </form>
            </div>
        )
}
export default Register;