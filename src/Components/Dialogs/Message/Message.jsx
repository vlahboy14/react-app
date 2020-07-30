import React from "react";
import style from "./../Dialogs.module.css";

const Message = (props) => {
  return <div className={style.dialog} id={props.id.id}>{props.message}</div>;
};

export default Message;
