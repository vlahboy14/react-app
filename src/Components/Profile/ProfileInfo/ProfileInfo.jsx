import React from "react";
import c from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://via.placeholder.com/1000x250" />
        <div className={c.descriptionBlock}>
          <div>Ava + description</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
