import React, {useState} from "react";
import {registerUser} from "../api";
import {storeToken} from "../auth";

const Register = ({setIsLoggedIn}) => {
    const [userName, setUserName] =  useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('')

    return(
        <div className="auth-component-main-container">
            <form
                id="register"
                onSubmit={async (event)=> {
                    event.preventDefault();
                    try {
                        const {data:{token}} = await registerUser(userName, password);
                        storeToken(token)
                        setIsLoggedIn(true);

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
            <fieldset className="auth-component_input">
                <label htmlFor="Email">Email </label>
                <input
                id="Email"
                type="text"
                placeholder="enter email"
                value={email}
                onChange={(event)=> {
                    setEmail(event.target.value);
                }}
                ></input>
            </fieldset>
            <button>Register</button>
           
            </form>
        </div>
    )
}

export default Register;