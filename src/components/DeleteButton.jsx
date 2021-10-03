import React from "react";
import { deletePost } from "../api";

const DeleteButton = ({ post }) => {

    console.log(deletePost, "hfass")
  return (
    <button className="delete-button"
    onClick=
    {async (event) => {
      event.preventDefault();
      try {
        await deletePost(post._id);
      } catch (error) {
        console.log(error);
      } finally {
        location.reload();
      }
    }}>

      Delete Your Post
    </button>
  );

};

export default DeleteButton;
