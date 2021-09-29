import axios from "axios";
import React, { useState, useEffect } from "react";
import { TabContainer } from "react-bootstrap";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import {
  Header,
  Posts,
  Register,
  NavBar,
  NewPostForm,
  Login,
} from "./components";

import {getToken} from "./auth";

const App = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(async () => {
    setAllPosts(await FetchAllPosts());
  }, []);


  return (
    <Router>
      <div id="App">
         <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/> 
        <Switch>
          <Route path="/register">
            <Register setIsLoggedIn={setIsLoggedIn}/>
          </Route>
          <Route path="/login">
            <Login setIsLoggedIn={setIsLoggedIn}/>
          </Route>
          <Route path="/posts">
            <NewPostForm setAllPosts={setAllPosts} />
            <Posts allPosts={allPosts} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
