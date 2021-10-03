import axios from "axios";
import React, { useState, useEffect } from "react";
const BASE = "https://strangers-things.herokuapp.com/api/2021-UNF-HY-WEB-PT";

import { storeToken, getToken } from "../auth";

export async function getUsers() {
  const myToken = getToken()
  
  try {
    const { data } = await axios.get(`${BASE}/users/me`, {
      headers: {
        "Content-Type": 'application/json',
          'Authorization': `Bearer ${myToken}`
      }
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getCurrentUser() {
  const myToken = getToken();
  try {
    const { data } = await axios.get(`${BASE}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${myToken}`,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
}


export async function registerUser(userName, password) {
  try {
    const { data } = await axios.post(`${BASE}/users/register`, {
      user: {
        username: userName,
        password: password,
      },
    });

    // try to add email element?

    return data;
  } catch (error) {
    throw error;
  }
}

export async function loginUser(userName, password) {
  try {
    const { data } = await axios.post(`${BASE}/users/login`, {
      user: {
        username: userName,
        password: password,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function createPost(title, description, price, location, delivery) {
  const token = getToken();

  try {
    const { data } = await axios.post(
      `${BASE}/posts`,
      {
        post: {
          title: title,
          description: description,
          price: price,
          location: location,
          delivery: delivery,
        },
      },
      {
        headers: {
          "Content-Type": "application/JSON",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    throw error;
  }
}

export async function deletePost(){
  const myToken = getToken();

  try {
    const { data } = await axios.delete(`${BASE}/posts/${id}`, {

      method:"DELETE",

      headers: {
        "Content-Type": 'application/json',
          'Authorization': `Bearer ${myToken}`
      }
    });
    return data;
  } catch (error) {
    throw error;
  } finally {
    location.reload();
  }

}
