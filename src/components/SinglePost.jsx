import React, { useState, useEffect } from "react";

export const SinglePost = ({ post }) => {
  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>Description: {post.description}</p>
      <p>Location : {post.location}</p>
      {post.willDeliver ? <p>Delivery : yes</p> : <p>Delivery : no</p>}
      {/* <p>Posted By : {post.author.username}</p> */}
      <p>Price : {post.price}</p>
      <p>Posted at {post.createdAt}</p>
    </div>
  );
};

export default SinglePost;
