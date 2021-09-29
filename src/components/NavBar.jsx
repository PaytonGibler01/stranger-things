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
        <Link id="nav-bar-link" to="/posts">
          Posts
        </Link>

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
      </header>
    </div>
  );
};

export default NavBar;
