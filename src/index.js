import axios from "axios";
import React, { useState, useEffect } from "react";
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

const FetchAllPosts = async ()=>{
    try{
      const myToken = getToken();
  
      if(myToken){
        setIsLoggedIn(true);
  
      }
  
      const response = await axios.get(
        "https://strangers-things.herokuapp.com/api/2021-UNF-HY-WEB-PT/posts",
        {
          headers: {
            "auth-token": myToken,
          },
        }
      );
  
      setAllPosts(response);
      return response.data.data.posts
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
