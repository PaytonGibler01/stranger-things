import React from "react";
import ReactDom from "react-dom";
import { Link } from "react-router-dom";
import { PostsLink } from "./Posts";
import "./navBar.css";
import {logoutUser} from "./Logout";

const NavBar = ({isLoggedIn, setIsLoggedIn}) => {
  return (
    <div className="nav-bar">
      <header>
      <h1 class="logo">Stranger's Things</h1>

              <div className ="header-posts-button" id>
        <Link id="header-posts-button" to="/posts">
          Posts
        </Link>
        </div>
      </header>

      <div className="login-logout-register-button">

      {isLoggedIn ? (
            <div className='auth-links'>
                <button className='nav-bar-link' to="/login" onClick={()=>{
                    localStorage.clear()
                    setIsLoggedIn(false);
                }}>Logout</button>
            </div>
        ): (<div className='auth-links'>
        <Link id="nav-bar-link" to="/login">
          Login
        </Link>
        <Link id="nav-bar-link" to="/register">
          Register
        </Link></div>)}
        </div>
      

    </div>
  );
};

export default NavBar;
