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
  SearchBar,
  SinglePostPage,
  DeleteButton,
} from "./components";

import { getToken } from "./auth";

import { getCurrentUser } from "./api";

const App = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [activeUser, setActiveUser] = useState(false);
  const [user, setUser] = useState({});



  const FetchAllPosts = async () => {
    try {
      const myToken = getToken();

      if (myToken) {
        setIsLoggedIn(true);
      }

      const {data:{data:{posts}}} = await axios.get(
        "https://strangers-things.herokuapp.com/api/2021-UNF-HY-WEB-PT/posts",
        {
          headers: {
            "Authorization": `Bearer ${myToken}`,
          },
        }
      );

      setAllPosts(posts);
      // return response.data.data.posts;
    } catch (error) {
      console.error(error);
    }

  };

  useEffect(async () => {
    FetchAllPosts();
  }, []);

  useEffect(() => {
    const myFilteredPosts = allPosts.filter((ele) => {
      if (ele.title.includes(searchTerm)) {
        return true;
      }
      if (ele.description.includes(searchTerm)) {
        return true;
      }
      return false;
    });

    setFilteredPosts(myFilteredPosts);
  }, [searchTerm]);

  const [currentUser, SetCurrentUser] = useState({});
useEffect(async () => {
    const data = await getCurrentUser();
    SetCurrentUser(data.data);
  }, []);

  



  return (
    <Router>
      <div id="App">
        <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Switch>
          <Route path="/register">
            <Register setIsLoggedIn={setIsLoggedIn} />
          </Route>
          <Route path="/login">
            <Login setIsLoggedIn={setIsLoggedIn} />
          </Route>
          {/* <Route path="/posts/:postId"> */}
            {/* <SinglePostPage allPosts={allPosts} filteredPosts={filteredPosts} currentUser={currentUser}/> */}
          {/* </Route> */}
          <Route path="/posts">
            <div className="post-new-container">
              <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
              <NewPostForm
                setAllPosts={setAllPosts}
                allPosts={allPosts}
                filteredPosts={filteredPosts}
              />
              <Posts allPosts={allPosts} filteredPosts={filteredPosts} user={user} setUser={setUser} currentUser={currentUser}/>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
