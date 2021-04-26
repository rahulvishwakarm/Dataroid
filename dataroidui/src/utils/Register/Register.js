import React, { useState } from 'react';
import { Button } from 'reactstrap'; 
import './Register.css';
import {useHistory} from 'react-router-dom';
import Axios from 'axios';

function Register(){
    const history = useHistory();
    const [regemail, setRegemail] = useState('');
    const [companyname, setCompany] = useState('');
    const [phone, setPhone] = useState('');
    const [regpassword, setRegpassword] = useState('');

    const register = (e) => {
        const emailRegex  = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        const phoneRegex = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;
        if(regemail!="") {
            if(emailRegex.test(regemail)) {
                if(companyname!="") {
                    if(phone!="") {
                        if(phoneRegex.test(phone)) {
                            if(regpassword!="") {
                                if(!(regpassword.length>8)) {
                                    alert('You will receive your login credentials, After Verfication of your account!!')
                                    e.preventDefault();
                                    history.push('/login')
                                    alert("You are registered with Us!!");
                                    Axios.post("http://localhost:5000/register",
                                    {
                                        ui_regemail:regemail,
                                        ui_companyname:companyname,
                                        ui_phone:phone,
                                        ui_regpassword:regpassword,
                                    }).then((response)=> {
                                        console.log(response)
                                    })
                                    console.log(regemail,companyname,phone,regpassword);
                                }
                                else{
                                    alert("Length of password should be 8 !!")
                                }
                            }
                            else {
                                alert("Please enter your password!!")
                            }
                        }
                        else {
                            alert("Please Enter Phone number in proper format!!!")
                        }
                    }else {
                        alert("Please enter you phone number!!")
                    }
                }
                else {
                    alert("Please enter your company name!!")
                }
            }
            else {
                alert("Please enter your email in proper format!!");
            }
            
        }else {
            alert("Please enter your email!!")
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