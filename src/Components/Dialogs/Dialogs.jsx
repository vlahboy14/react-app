import React from "react";
import c from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = props => {
  return (
    <div className={c.dialog}>
      <NavLink to={"dialogs/" + props.id}> {props.name} </NavLink>
    </div>
  );
};

const Message = props => {
  return <div className={c.dialog}>{props.text}</div>;
};

const Dialogs = props => {
  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItems}>
        <DialogItem id="1" name="Andrey" />
        <DialogItem id="2" name="Marina" />
        <DialogItem id="3" name="Vasea" />
        <DialogItem id="4" name="Sanea" />
      </div>
      <div className={c.messages}>
        <Message text="Hi" />
        <Message text="How are you ?" />
        <Message text="Fine!" />
      </div>
    </div>
  );
};

export default Dialogs;
