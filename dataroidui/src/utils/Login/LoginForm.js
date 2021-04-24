import React from 'react'

function LoginForm() {  

        return (
            <div>
                <form onSubmit="/">
                    <div> 
                        <label for="email">User Name</label>
                        <input type="email" placeholder="Enter Email" className="email" required/>
                    </div>
                    <div>
                        <label for="pass">Password</label>
                        <input type="password" placeholder="Enter Email" className="pass" required/>
                    </div>
                    <div>
                        <button type="button" >Login</button>
                    </div>
                </form>
            </div>
        )
}

export default LoginForm
