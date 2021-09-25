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

export const FetchAllPosts = async () => {
  try {
    const myToken = getToken();
    const response = await axios.get(
      "https://strangers-things.herokuapp.com/api/2021-UNF-HY-WEB-PT/posts",
      {
        headers: {
          "auth-token": myToken,
        },
      }
    );

    // setAllPosts(response);
    return response.data.data.posts
  } catch (error) {
    console.log(error);
  }
};

export async function registerUser(userName, password) {
  try {
    const {data} = await axios.post(`${BASE}/users/register`, {
      username: userName,
      password: password,
      // try to add email element?
    });
    return data;
  } catch (error) {
    throw error;
  }
}