import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = () => {
  let postData = [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "Hi, how are you?", likesCount: 10 },
  ];

  return (
    <div className={c.postsBlock}>
      <h3> My Posts </h3>
      <div>
        <textarea className={c.textarea}></textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>
      <div className={c.posts}>
        <Post message={postData[0].message} likes={postData[0].likesCount} />
        <Post message={postData[1].message} likes={postData[1].likesCount} />
      </div>
    </div>
  );
};

export default MyPosts;
