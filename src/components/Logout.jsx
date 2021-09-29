async function logoutUser(userName, password) {
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
  export default logoutUser