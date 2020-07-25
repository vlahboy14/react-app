import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {

  let dialogsElements = props.dialogsData
    .map(user => <DialogItem id={user.id} name={user.name} />
    );

  let messages = props.messagesData
    .map(message => <Message message={message.message} />);

  return (
    <div className={style.dialogs}>
      <div className={style.dialogItems}>
        {dialogsElements}
      </div>
      <div className={style.messages}>
        {messages}
      </div>
    </div>
  );
};

export default Dialogs;
