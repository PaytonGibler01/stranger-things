import React, { useState, useEffect } from "react";
import "./Posts.css";
import { SinglePost } from "./SinglePost";
import {Link} from 'react-router-dom';
import { getUser } from "../auth";

  const Posts = ({allPosts, filteredPosts}) => {
    return(
      <div className="posts-main-container">
        {filteredPosts && filteredPosts.length ? filteredPosts.map((post) => {
          return (
            <Link
              to={`/posts/${post._id}`}
              key={post._id}
              className="link-tag"
              >
                <SinglePost post={post} />
                
              </Link>
          );
        })
      : allPosts && allPosts.length 
      ? allPosts.map((post) => {
        return (
          <Link
            to={`/posts/${post._id}`}
            key={post._id}
            className="link-tag"
            >
              <SinglePost post={post} />
            </Link>
        );
      })
      : null }
      </div>
    )
  };

  


// export const PostsLink = () => {
//   return (
//     <div className="posts-Button-Link">
//       <form
//         id="postsButton"
//         onSubmit={async (event) => {
//           event.preventDefault();
//           try {
//             Posts();
//           } catch (error) {}
//         }}
//       />
//     </div>
//   );
//   console.log(PostsLink, "!!!!!!")
// };
// WHAT IS THIS^



export default Posts;
