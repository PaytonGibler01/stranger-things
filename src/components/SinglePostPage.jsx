import React from 'react';
import { useParams } from 'react-router';
import { SinglePost } from './SinglePost';
 
const SinglePostPage = ({allPosts}) => {
const {postId} = useParams();

const myPost = allPosts.find((post) => post._id === postId);

if(!myPost){
    return(
        <div className='post-card'>
            <h1>"ERROR: Post cannot be found."</h1>
        </div>
    )
}

    return (
        <div className='posts-main-container'>
            <SinglePost post={myPost} />
            <h1>profile stuff</h1>
        </div>
    )

    // return (
    //     <div>
    //       <SinglePost post={myPost} />
    //     </div>
    //   );
    
}

export default SinglePostPage;


// import React from "react";
// import { useParams } from "react-router-dom";
// import { SinglePost } from "./";

// const SinglePostPage = ({ allPosts }) => {
//   const { postId } = useParams();

//   const myPost = allPosts.find((post) => {
//     if (post._id === postId) {
//       return true;
//     } else {
//       false;
//     }
//   });

//   if (!myPost) {
//     return (
//       <div className="post-card">
//         <h3> the post with id {postId} was not found</h3>
//       </div>
//     );
//   }

//   return <SinglePost post={myPost} />;
// };

// export default SinglePostPage;
