import React, {useState} from "react";
import {createPost} from "../api";
import {getToken, getUser} from "../auth";
import './NewPosts.css'

const NewPostForm = ({setAllPosts, allPosts}) => {
const [title, setTitle] = useState('')
const [description, setDescription] = useState('')
const [price, setPrice] = useState('')
const [location, setLocation] = useState('')
const [delivery, setDelivery] = useState("")

    return (
        <div className="new-post-component-main-container">
            <form
                id="newPostSubmit"
                onSubmit={async (event)=>{
                    event.preventDefault();
                    try {
                        const token = getToken();
                        const user = getUser();
                        const createNewPost = await createPost(title, description, price,location, delivery, token);
                        setAllPosts([createNewPost, ...allPosts]);
                        console.log("button works")

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
            <fieldset className="auth-component_input">
                <label htmlFor="price">Price: </label>
                <input
                id="price"
                type="text"
                placeholder="Price"
                value={price}
                onChange={(event)=> {
                    setPrice(event.target.value);
                }}
                ></input>
            </fieldset>
            <fieldset className="auth-component_input">
                <label htmlFor="Location">Location: </label>
                <input
                id="location"
                type="text"
                placeholder="enter location"
                value={location}
                onChange={(event)=> {
                    setLocation(event.target.value);
                }}
                ></input>
            </fieldset>
            <fieldset className="auth-component_input">
                <label htmlFor="willDeliver">Delivery: </label>
                <input
                id="willDeliver"
                type="text"
                placeholder="yes/no"
                value={delivery}
                onChange={(event)=> {
                    setDelivery(event.target.value);
                }}
                ></input>
            </fieldset>
 
            <button type="submit" id="newPostSubmit"
            >Submit Post</button>
            </form>

        </div>
    );
}

export default NewPostForm;