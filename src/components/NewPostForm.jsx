import React, {useState} from "react";
import {createPost} from "../api";
import {getToken, getUser} from "../auth";

const NewPostForm = ({setAllPosts, allPosts}) => {
const [title, setTitle] = useState('')
const [description, setDescription] = useState('')

    return (
        <div className="new-post-component-main-container">
            <h1>new post form</h1>
            <form
                id="newPostSubmit"
                onSubmit={async (event)=>{
                    event.preventDefault();
                    try {
                        const token = getToken();
                        const user = getUser();

                        const createPost = await createPost(title, description, user, token);
                        setAllPosts([createPost, ...allPosts]);

                    } catch (error) {
                        console.log(error)
                    }
                }}
            >
                <h2>Create Posts Here</h2>
                <fieldset className="auth-component_input">
                <label htmlFor="title">Title: </label>
                <input
                id="title"
                type="text"
                placeholder="enter title"
                value={title}
                onChange={(event)=> {
                    setTitle(event.target.value);
                }}
                ></input>
            </fieldset>

            <fieldset className="auth-component_input">
                <label htmlFor="description">Description: </label>
                <input
                id="description"
                type="text"
                placeholder="enter description"
                value={description}
                onChange={(event)=> {
                    setDescription(event.target.value);
                }}
                ></input>
            </fieldset>
            <button type="submit">Submit Post</button>
            </form>

        </div>
    );
}

export default NewPostForm;