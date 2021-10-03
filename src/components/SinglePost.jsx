import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {getCurrentUser} from '../api';
import {getUser, myUser} from '../auth';
import {DeleteButton, Posts} from '.'

export const SinglePost = ({ post, currentUser }) => {
  let myUser = getUser();

  console.log(currentUser, "321572137")
  console.log(myUser, "oooooooooo")

  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>Description: {post.description}</p>
      <p>Location : {post.location}</p>
      {post.willDeliver ? <p>Delivery : yes</p> : <p>Delivery : no</p>}
      <p>Posted By : {post.author.username}</p>
      <p>Price : {post.price}</p>
      <p>Posted at {post.createdAt}</p>

        {post.author.username === currentUser.username ? (
          <DeleteButton post={post}/>
        ) : currentUser.username && post.author.username !== currentUser.username ? (
          <Link
            to={'/message'}
            onClick={() => {
              setUsername(myUser);
              
            }}
            ><button>Send A Message</button></Link>
        ) : null} 
        
    </div>
  );
};

export default SinglePost;
