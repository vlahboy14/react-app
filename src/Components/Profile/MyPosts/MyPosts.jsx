import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = () => {

  // let addPostButton = document.getElementsByClassName('.add_post');
  // let textArea = document.getElementsByClassName('.textarea');

  // addPostButton.addEventListener('click', () => {
  //   textArea.value = null
  // });


  let postData = [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "Hi, how are you?", likesCount: 10 },
  ];

  let postsElements = postData
    .map(post => <Post message={post.message} likes={post.likesCount} />);
  
  return (
    <div className={c.postsBlock}>
      <h3> My Posts </h3>
      <div>
        <textarea className={c.textarea}></textarea>
      </div>
      <div>
        <button className='add_post'>Add post</button>
      </div>
      <div className={c.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
