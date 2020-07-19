import React from "react";
import c from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={c.user}>
      <NavLink to={path} activeClassName={c.active}> {props.name} </NavLink>
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

  let dialogsElements = dialogsData
    .map(user => <DialogItem id={user.id} name={user.name} />
    );

  let messages = messagesData
    .map(message => <Message message={message.message} />);

  return (
    <div className={c.dialogs}>
      <div className={c.dialogItems}>
        {dialogsElements}
      </div>
      <div className={c.messages}>
        {messages}
      </div>
    </div>
  );
};

export default Dialogs;
