import React from "react";
import { NavLink } from "react-router-dom";
import style from "./../Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
      <div className={style.user}>
      <img className={style.avatar} src="https://via.placeholder.com/25x25" alt='' />
        <NavLink to={path} activeClassName={style.active}> {props.name} </NavLink>
      </div>
  );
};

export default DialogItem;