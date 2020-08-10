import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = (props) => {

  let postsElements = props.posts
    .map(post => <Post message={post.message} likes={post.likesCount} />);

  let newPostElement = React.createRef();

  let sendMessage = () => {
    let text = newPostElement.current.value
    props.addPost(text);
  }

  return (
    <div className={style.postsBlock}>
      <h3> My Posts </h3>
      <div>
        <textarea ref={newPostElement} className={style.textarea}></textarea>
      </div>
      <div>
        <button className={style.add_post} onClick={sendMessage}>Add post</button>
      </div>
      <div className={style.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
