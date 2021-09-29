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
import { FetchAllPosts } from "./api";
import {
  Header,
  Posts,
  Register,
  NavBar,
  NewPostForm,
  Login,
} from "./components";

const App = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

const FetchAllPosts = async ()=>{
  try{
    const myToken = getToken();

    if(myToken){
      setIsLoggedIn(true);

    }

    const {data} = await axios.get(
      "http://clever-neumann-583.herokuapp.com/posts",
      {
        headers: {
          "auth-token": myToken,
        },
      }
    );

    setAllPosts(data);
  } catch (error) {
    console.error(error);
  }

};

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
