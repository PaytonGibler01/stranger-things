// async function loginUser(userName, password) {
//     try {
//       const {data} = await axios.post(`${BASE}/login`, {
//           user:  {
//             username: userName,
//             password: password
//           }  // NEED TOKEN THING HERE FR
//           })
//       return data;
//     } catch (error) {
//       throw error;
//     }

//     return(
//         <h1>hello login</h1>
//     )
//   }
//   export default loginUser

import React, { useState } from "react";
import { loginUser } from "../api";
import { storeToken, storeUser } from "../auth";

const Login = ({setIsLoggedIn}) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="auth-component-main-container">
      <form
        id="login"
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            const {
              data: { token },
            } = await loginUser(userName, password);
            storeToken(token);
            storeUser(userName);
            setIsLoggedIn(true);

            setUserName(""); //maybe dont need !//
            setPassword("");
          } catch (error) {
            console.error(error);
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
            onChange={(event) => {
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
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          ></input>
        </fieldset>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
