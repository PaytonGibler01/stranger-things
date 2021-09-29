import axios from 'axios';

const BASE = 'https://strangers-things.herokuapp.com/api/2021-UNF-HY-WEB-PT'

import {storeToken, getToken} from "../auth";
//this is an example of an api call with axios

// export const FetchAllPosts = async () => {
//   try {
//     const response = await axios.get(
//       "https://strangers-things.herokuapp.com/api/2021-UNF-HY-WEB-PT/posts"
//     );
//     return response.data.data.posts
//   } catch (error) {
//     console.log(error);
//   }
// };

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

