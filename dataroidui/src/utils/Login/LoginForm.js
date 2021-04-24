import React ,{useState} from 'react';
import './LoginForm.css';
import {useHistory} from "react-router-dom";
import { Button } from 'reactstrap';    

function LoginForm() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const signIn = e =>{
        if(email!="" ){
            if(password!=""){
                e.preventDefault(); 
        auth
            .signInWithEmailAndPassword(email,password)
            .then(auth =>{
                history.push('/')
                alert("Sign In Succesfull");
            })
            .catch(error => alert(error.message))
            }else{
                alert("Please enter password");
            }
            
        }
        else{
            alert("Please enter username!!");
        }
        
    }

    const register = e =>{
        if(email!="" & password!=""){
            e.preventDefault(); 

        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth)=>{
                //it succesfully created newv user with ermail and password
                console.log(auth);
                if(auth){
                    history.push('/')
                    alert("Sign up Succesfull");
                }
            })
            .catch(error => alert(error.message))
        }
        else{
            alert("Please enter username and password")
        }
        
    }

    const forgetpassword = e =>{

        if(email!==""){
            auth.sendPasswordResetEmail(email).then(function() {
                alert("Please check your Inbox "+email+" to reset password");
            }).catch(function(error) {
                alert("Error in reseting password"+error);
            });
        }else{
            alert("Please Enter Username!")
        }
        
    }

    return (
            <div className="id01">
                    <form className="modal-content animate">
                                <div className="container1">
                                    <label htmlFor="uname"><b>Username</b></label>
                                    <input className="usernameinput" type="email" placeholder="Enter Username" value={email} name="uname" onChange={e=>setEmail(e.target.value)} /><br></br>
                                    <label htmlFor="psw"><b>Password</b></label>
                                    <input className="passwordinput" type="password" placeholder="Enter Password" value={password} name="psw" onChange={e=>setPassword(e.target.value)} /><br></br>
                                        <Button className="loginbutton" color="success" onClick={signIn}>Sign In</Button>
                                        <Button className="forgetpassword" color="danger" onClick={forgetpassword}>Forget Password</Button>
                                </div><br></br>
                                <div className="container1" >
                                    <p>By continuing, you agree to Dataroid's Conditions of Use and Privacy Notice.</p>
                                    <h5 >----------------New to Dataroid----------------</h5>
                                    <Button className="register" color="warning" onClick={register}>Create Your Dataroid Account</Button>
                                </div>
                    </form>
            </div>
    )
}

export default LoginForm;
