import React from "react";
import style from "./ProfileInfo.module.css";
import avatar from './../../../assets/images/reactjs.jpg'

const ProfileInfo = () => {
  return (
    <div>
      <div className={style.headerImg}>
        <div className={style.descriptionBlock}>
          <div className={style.ava}>
            <img src={avatar} alt='' />
          </div>
          <div> Description:
            <div className={style.description}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, fugiat ducimus optio sunt beatae, deleniti amet vero quam culpa ut provident sequi esse expedita. Fugit ex eveniet facere autem dolore! </div> </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
