import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {getCurrentUser} from '../api';
import {getUser, myUser} from '../auth';

export const SinglePost = ({ post }) => {
  let myUser = getUser();
  let currentUser = getCurrentUser();


  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>Description: {post.description}</p>
      <p>Location : {post.location}</p>
      {post.willDeliver ? <p>Delivery : yes</p> : <p>Delivery : no</p>}
      <p>Posted By : {myUser}</p>
      <p>Price : {post.price}</p>
      <p>Posted at {post.createdAt}</p>
      {/* <Link
        to={`/other-posts-by/${post.author.username}`}
        onClick={()=> {
          setUsername(post.author.username);
        }}
        >
          <p>"Other Posts By (post.author.username)</p>
        </Link> */}

        {myUser === currentUser ? (
          <button
            className="delete-post"
            onClick={async (event) => {
              event.preventDefault();
              

              try {
                await deletePost(post._id);
              } catch (error) {
                console.log(error);
              }
            }}
            >Delete Post</button>
        ) : currentUser && myUser !== currentUser ? (
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
