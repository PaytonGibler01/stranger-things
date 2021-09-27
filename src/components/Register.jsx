import React, {useState} from "react";
import {registerUser} from "../api";
import {storeToken} from "../auth";

const Register = (props) => {
    const [userName, setUserName] =  useState('');
    const [password, setPassword] = useState('');

    return(
        <div className="auth-component-main-container">
            <form
                id="register"
                onSubmit={async (event)=> {
                    event.preventDefault();
                    try {
                        const {data:{token}} = await registerUser(userName, password);
                        storeToken(token)

                         setUserName("")    //maybe dont need !//
                         setPassword("")
                    } catch (error) {
                        console.error(error)
                    }
                }}
            >

            <fieldset className="auth-component_input">
                <label htmlFor="userName">Username: </label>
                <input
                id="userName"
                type="text"
                placeholder="enter username"
                value={userName}
                onChange={(event)=> {
                    setUserName(event.target.value);
                }}
                ></input>
            </fieldset>
            
            <fieldset className="auth-component_input">
                <label htmlFor="password">Password: </label>
                <input
                id="password"
                type="password"
                placeholder="enter password"
                value={password}
                onChange={(event)=> {
                    setPassword(event.target.value);
                }}
                ></input>
            </fieldset>
            <button>Register</button>
           
            </form>
            <h1>hello register</h1>
        </div>
    )
}

export default Register;