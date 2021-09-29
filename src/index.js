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

<<<<<<< HEAD

=======
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
    return response.data.data.posts;
  } catch (error) {
    console.error(error);
  }

};
>>>>>>> 8e0a4046c2b187e6b64467cf611b1c88283ba19c

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
