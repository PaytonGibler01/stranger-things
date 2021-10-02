import React from 'react';
import { useParams } from 'react-router';
import { SinglePost } from './SinglePost';

const SinglePostPage = ({allPosts}) => {
const {postId} = useParams();

const myPost = allPosts.find((post)=>{
    if(post._id === postId){
        return true
    } else {
        return false
    }
});

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
        </div>
    )
}

export default SinglePostPage;