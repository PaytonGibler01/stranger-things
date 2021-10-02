import axios from 'axios';
import React, { useState, useEffect } from "react";
const BASE = 'https://strangers-things.herokuapp.com/api/2021-UNF-HY-WEB-PT'

import {storeToken, getToken} from "../auth";



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
         
          title: title,
          description: description,
          author: user,
        
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

