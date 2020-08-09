import React from "react";
import style from "./Post.module.css";

const Post = props => {
  return (
    <div className={style.item}>
      <img className="ava" src="https://via.placeholder.com/50x50" alt='' />
      <div> {props.message} {props.likes}</div>
    </div>
  );
};

export default Post;
