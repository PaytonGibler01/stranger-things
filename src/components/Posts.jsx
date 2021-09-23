import React, {useState, useEffect} from "react";
//import { FetchAllPosts } from "../api";

 const Posts = ({allPosts}) => {
  // const { allPosts } = props
  console.log(allPosts)
  return (
    <div className="posts-main-container">
       {  allPosts.length
        ? allPosts.map((post) => {
            console.log(post);
            return (
              <div key={post._id} className="post-card">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <p>Location : {post.location}</p>
                <p>Delivery : {post.willDeliver}</p>
                <p>Posted By : {post.author.username}</p>
                <p>Price : {post.price}</p>
                <p>Posted at {post.createdAt}</p>
                <p>{post.description}</p>
                <p>{post.description}</p>
              </div>
            )
          })
        : null }
    </div>
  );
};
export default Posts;

