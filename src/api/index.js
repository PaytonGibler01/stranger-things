import axios from 'axios';
import React, { useState, useEffect } from "react";
const BASE = 'https://strangers-things.herokuapp.com/api/2021-UNF-HY-WEB-PT'

import {storeToken, getToken} from "../auth";

<<<<<<< HEAD
const [allPosts, setAllPosts] = useState([])
export const FetchAllPosts = async ()=>{
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
=======
// export const FetchAllPosts = async () => {
//   try {
//     const myToken = getToken();
//     const response = await axios.get(
//       "https://strangers-things.herokuapp.com/api/2021-UNF-HY-WEB-PT/posts",
//       {
//         headers: {
//           "auth-token": myToken,
//         },
//       }
//     );

//     // setAllPosts(response);
//     return response.data.data.posts
//   } catch (error) {
//     console.log(error);
//   }
// };
>>>>>>> 8e0a4046c2b187e6b64467cf611b1c88283ba19c

export async function registerUser(userName, password) {
  try {
    const {data} = await axios.post(`${BASE}/users/register`, {
        user:  { 
          username: userName,
          password: password
        }
        })
    
      // try to add email element?
    
    return data;
  } catch (error) {
    throw error;
  }
}

export async function loginUser(userName, password) {
  try {
    const {data} = await axios.post(`${BASE}/users/login`, {
        user:  { 
          username: userName,
          password: password
        }
        })
    return data;
  } catch (error) {
    throw error;
  }
}

export async function createPost(title, description, user, token) {
  try {
    const {data} = await axios.post(`${BASE}/posts`, {
        newPost:  { 
          title: title,
          description: description,
          author: user,
        }
        }, {
          headers: {
            "auth-token" : token,

          }
        })
    return data;
  } catch (error) {
    throw error;
  }
}

