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
  SearchBar
} from "./components";

import {getToken} from "./auth";

const App = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredPosts, setFilteredPosts] = useState('')
  
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
  
  useEffect(()=>{
const myFilteredPosts = allPosts.filter((ele)=>{
if (ele.title.includes(searchTerm)){
  return true
}
if (ele.description.includes(searchTerm)){
  return true
}
  return false
})},[searchTerm])


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
            <SearchBar searchTerm={searchTerm} setSearchTerm="setSearchTerm"/>
            <div className="post-new-container">
            <NewPostForm setAllPosts={setAllPosts} allPosts={allPosts} />
            <Posts allPosts={allPosts} />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
