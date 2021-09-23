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
} from './components';



const App = () => {
const [allPosts, setAllPosts] = useState([])

useEffect(async()=>{setAllPosts(await FetchAllPosts())}, [])


  return (
    <Router>
      <div id="App">
        <Header/>
        {/* <Route path="/posts"> */}
        <Posts allPosts={allPosts}/>
        {/* </Route> */}

      </div>
    </Router>
  );
}

ReactDOM.render(<App />,document.getElementById('root'));