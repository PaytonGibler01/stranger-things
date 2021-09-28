async function logoutUser(userName, password) {
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
  export default logoutUser;