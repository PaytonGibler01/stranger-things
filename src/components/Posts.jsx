import React, { useState, useEffect } from "react";
import './Posts.css'
const Posts = ({ allPosts }) => {
  console.log(allPosts);
  return (
    <div className="posts-main-container">
      {allPosts.length
        ? allPosts.map((post) => {
            console.log(post);
            return (
              <div key={post._id} className="post-card">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <p>Location : {post.location}</p>
                {post.willDeliver ? (
                  <p>Delivery : yes</p>
                ) : (
                  <p>Delivery : no</p>
                )}
                <p>Posted By : {post.author.username}</p>
                <p>Price : {post.price}</p>
                <p>Posted at {post.createdAt}</p>
              </div>
            );
          })
        : null}
    </div>
  );
};
export const PostsLink = () => {
  return (
    
    <div className="posts-Button-Link">
      <form
        id="postsButton"
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            Posts();
          } catch (error) {}
        }}
      />
    </div>
  );
};

export default Posts;
