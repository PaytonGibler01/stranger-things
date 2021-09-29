import React from "react";
import ReactDom from "react-dom";
import { Link } from "react-router-dom";
import { PostsLink } from "./Posts";
import "./navBar.css";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <header>
        <Link id="nav-bar-link" to="/posts">
          Posts
        </Link>
        <Link id="nav-bar-link" to="/login">
          Login
        </Link>
        <Link id="nav-bar-link" to="/register">
          Register
        </Link>
        <Link id="nav-bar-link" to="/logout">
         Logout
        </Link>
      </header>
    </div>
  );
};

export default NavBar;
