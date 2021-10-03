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
        {/* {isLoggedIn ? (
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

        {/* <div className ="header-posts-button" id>
        <Link id="nav-bar-link" to="/posts">
          Posts
        </Link>
        </div> */}
      </header>

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

        {/* <div className ="header-posts-button" id>
        <Link id="nav-bar-link" to="/posts">
          Posts
        </Link>
        </div> */}
      

      <div className ="header-posts-button" id>
        <Link id="nav-bar-link" to="/posts">
          Posts
        </Link>
        </div>
    </div>
  );
};

export default NavBar;
