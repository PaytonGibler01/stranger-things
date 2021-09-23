import axios from 'axios';

const BASE = 'https://strangers-things.herokuapp.com/api/2021-UNF-HY-WEB-PT'
//this is an example of an api call with axios

export const FetchAllPosts = async () => {
  try {
    const response = await axios.get(
      "https://strangers-things.herokuapp.com/api/2021-UNF-HY-WEB-PT/posts"
    );
    //console.log(response.data.data.posts);
    return response.data.data.posts
  } catch (error) {
    console.log(error);
  }
};
