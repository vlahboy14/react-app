import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import style from './Profile.module.css'

const Profile = (props) => {

  return (
    <div className={style.backgroundImg}>
      <ProfileInfo />
      <MyPosts posts={props.profilePage.posts} />
    </div>
  );
};

export default Profile;
