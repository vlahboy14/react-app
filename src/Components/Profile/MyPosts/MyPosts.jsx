import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post.module.css";

const MyPosts = () => {
  return <div className={c.posts}>
    <Post />
    <Post />
    <Post />
  </div>;
};

export default MyPosts;
