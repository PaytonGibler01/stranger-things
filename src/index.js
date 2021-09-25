import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { FetchAllPosts } from './api';
import {
  Header,
  Posts,
  Register,
  NavBar,
  loginUser

} from './components';



const App = () => {
const [allPosts, setAllPosts] = useState([])

useEffect(async()=>{setAllPosts(await FetchAllPosts())}, [])


  return (
    <Router>
      <div id="App">
        <NavBar/>
        <Switch>
          <Route path="register">
            <Register />
          </Route>
          <Route path="login">
            <loginUser />
          </Route>
          


         <Route path="/posts">
            <Posts allPosts={allPosts}/>
         </Route> 
        </Switch>
      </div>
      </Router>
   
  );
}

ReactDOM.render(<App />,document.getElementById('root'));