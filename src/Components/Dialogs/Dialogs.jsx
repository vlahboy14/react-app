import React from "react";
import c from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={c.user + " " + c.active}>
      <NavLink to={path}> {props.name} </NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={c.dialog}>{props.message}</div>;
};

const Dialogs = (props) => {

  let dialogsData = [
    { id: 1, name: "Andrey" },
    { id: 2, name: "Marina" },
    { id: 3, name: "Vasea" },
    { id: 4, name: "Sanea" },
    { id: 5, name: "Petya" },
  ];

  let messagesData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you ?" },
    { id: 3, message: "I`m fine" },
    { id: 4, message: "Thank you" },
  ];

  return (
    <div className={c.dialogs}>
      <div className={c.dialogItems}>
        <DialogItem id={dialogsData[0].id} name={dialogsData[0].name} />
        <DialogItem id={dialogsData[1].id} name={dialogsData[1].name} />
        <DialogItem id={dialogsData[2].id} name={dialogsData[2].name} />
        <DialogItem id={dialogsData[3].id} name={dialogsData[3].name} />
        <DialogItem id={dialogsData[4].id} name={dialogsData[4].name} />
      </div>
      <div className={c.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
        <Message message={messagesData[3].message} />
      </div>
    </div>
  );
};

export default Dialogs;
