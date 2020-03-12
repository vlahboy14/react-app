import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = () => {
  return (
    <div className={c.postsBlock}>
      <h3> My Posts </h3>
      <div className={c.posts}>
        <Post message="Hi!" likes="12" />
        <Post message="Hi :)" likes="22" />
        <Post message="Salam Aleykum" />
      </div>
    </div>
  );
};

export default MyPosts;
