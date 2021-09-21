import axios from "axios";
import React from "react";

 const FetchAllPosts = async () => {
  try {
    const response = await axios.get(
      "https://strangers-things.herokuapp.com/api/2021-UNF-HY-WEB-PT/posts"
    );
    console.log(response);
    return response
  } catch (error) {
    console.log(error);
  }
};

 const Posts = (props) => {
  const { allPosts } = props;
  return (
    <div className="posts-main-container">
       {allPosts.length
        ? allPosts.map((post) => {
            console.log(post)
            return (
              <div key={post._id} className="post-card">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <p>Location : {post.location}</p>
                <p>Delivery : {post.willDeliver}</p>
                <p>{post.active}</p> {/* might not need Think about it  */}
                <p>Posted By : {post.author.username}</p>
                <p>Price : {post.price}</p>
                <p>Posted at {post.createdAt}</p>
                <p>{post.description}</p>
                <p>{post.description}</p>
              </div>
            );
          })
        : null}
    </div>
  );
};
export default Posts;

