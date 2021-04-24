import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import './LoginForm.css';

function LoginForm(props) {  
    const history = useHistory();
    const [username,setUserName] = useState("");
    const [pass,setPassword] = useState("");

    const logIn = (event) => {
        if(username!="") {
            if(pass!="") {
                alert("Sign In Sucessfull");
                console.log(username,pass);
                history.push('/');
                window.location.reload();
            }
            else{
                alert("Please enter paswword");
            }
        }
        else {
            alert("Please Enter Username")
        }
    }
            return (
                <div className="LoginFormMain">
                    <form onSubmit="/">
                        <div className="mainheadtext">DataRoid</div>
                        <div> 
                            <label for="email">User Name</label>
                            <input type="email" placeholder="Enter Email" value={username} className="email" onChange={e=>setUserName(e.target.value)}/>
                        </div>
                        <div>
                            <label for="pass">Password</label>
                            <input type="password" placeholder="Enter Email" value={pass} className="passw" onChange={e=>setPassword(e.target.value)}/>
                        </div>
                        <div className="btnlogin">
                            <button type="button" onClick={logIn} >Login</button>
                        </div>
                    </form>
                </div>
            )
}

export default LoginForm
