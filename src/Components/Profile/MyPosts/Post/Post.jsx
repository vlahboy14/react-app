import React from "react";
import c from "./Post.module.css";

const Post = props => {
  return (
    <div className={c.item}>
      <img className="ava" src="https://via.placeholder.com/100x50" />
      <div> {props.message} {props.likes}</div>
    </div>
  );
};

export default Post;
