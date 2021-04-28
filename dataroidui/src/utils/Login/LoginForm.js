import React ,{useState} from 'react';
import './LoginForm.css';
import {useHistory,Link} from "react-router-dom";
import { Button } from 'reactstrap'; 
import Axios from 'axios';
import InfoIcon from '@material-ui/icons/Info';

function LoginForm() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const signIn = e =>{
        if(email!="" ){
            if(password!="") {
                e.preventDefault();
                history.push('/')
                alert("Sign In Succesfull");
                Axios.post("http://localhost:5000/login",
                {
                    emailid:email,
                    passwordid:password,

                }).then((response)=> {
                    console.log(response)
                })
                console.log(email,password);
            }else{
                alert("Please enter password!!");
            }
        }
        else{
            alert("Please enter username!!");
        }
        
    }

    const forgetpassword = e =>{
        if(email!==""){
            
        }else{
            alert("Please Enter Username!")
        }
        
    }

    return (
            <div className="id01">
                    <form className="modal-content animate">
                                <div className="container1">
                                    <label htmlFor="uname"><b>Customer Id</b><InfoIcon style={{'font-size':'15px','color':'#48cae4','margin-left':'2px'}}/></label>
                                    <input className="usernameinput" type="email" placeholder="Enter Customer Id" value={email} name="uname" onChange={e=>setEmail(e.target.value)} /><br></br>
                                    <label htmlFor="psw"><b>Password</b></label>
                                    <input className="passwordinput" type="password" placeholder="Enter Password" value={password} name="psw" onChange={e=>setPassword(e.target.value)} /><br></br>
                                        <Button className="loginbutton" color="success" onClick={signIn}>Sign In</Button>
                                        <Button className="forgetpassword" color="danger" onClick={forgetpassword}>Forget Password</Button>
                                </div>
                                <div className="container1" >
                                    <p>By continuing, you agree to Dataroid's Conditions of Use and Privacy Notice.</p>
                                    <div className="login-button-update">
                                        <Link to="/register"><Button className="register" color="warning" >Create Your Dataroid Account</Button></Link>
                                    </div> 
                                </div>
                    </form>
            </div>
    )
}

export default LoginForm;
