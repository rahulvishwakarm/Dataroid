import React, { useState } from 'react';
import { Button } from 'reactstrap'; 
import './Register.css';

function Register(){
    const [regemail, setRegemail] = useState('');
    const [companyname, setCompany] = useState('');
    const [phone, setPhone] = useState('');
    const [regpassword, setRegpassword] = useState('');
        return (
            <div className="register-main">
                <form className="modal-content animate">
                                <div className="register-header">
                                    <h3>Register with Us</h3>
                                </div>
                                <div className="container1">
                                    <label htmlFor="emailinput"><b>Email</b></label>
                                    <input className="emailinput" type="email" placeholder="Enter Username" value={regemail} name="emailinput"  onChange={e=>setRegemail(e.target.value)}/><br></br>
                                    <label htmlFor="companynameinput"><b>Company Name</b></label>
                                    <input className="companynameinput" type="text" placeholder="Enter Username" value={companyname} name="companynameinput"  onChange={e=>setCompany(e.target.value)} /><br></br>
                                    <label htmlFor="phone"><b>Phone</b></label>
                                    <input className="phone" type="tel" placeholder="Enter Username" value={phone} name="phone" onChange={e=>setPhone(e.target.value)} /><br></br>
                                    <label htmlFor="regpasswordinput"><b>Password</b></label>
                                    <input className="regpasswordinput" type="password" placeholder="Enter Password" value={regpassword} name="regpasswordinput" onChange={e=>setRegpassword(e.target.value)} /><br></br>
                                        <Button className="register" color="success" >Register</Button>
                                </div>
                    </form>
            </div>
        )
}
export default Register;