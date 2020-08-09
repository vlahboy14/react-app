import React from "react";
import style from "./../Dialogs.module.css";

const Message = (props) => {
  return (
    <div>
      <div className={style.dialog} id={props.id.id}>{props.message}</div>
    </div>)
};

export default Message;
