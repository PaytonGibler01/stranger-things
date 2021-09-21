import axios from 'axios';

const BASE = 'https://strangers-things.herokuapp.com/api/2021-UNF-HY-WEB-PT'
//this is an example of an api call with axios
export async function getUsers() {
  try {
    const { data } = await axios.get(`${ BASE }/users`);
    return data;
  } catch (error) {
    throw error;
  }
}
