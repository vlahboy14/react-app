import React from "react";
import c from "./Profile.module.css";
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://via.placeholder.com/100x50" />
      </div>
      <div>Ava + description</div>
      <MyPosts/>
    </div>
  );
};

export default Profile;
