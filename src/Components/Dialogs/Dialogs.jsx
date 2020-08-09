import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {

  let postMessage = React.createRef();

  let dialogsElements = props.dialogsPage.dialogs
    .map(user => <DialogItem id={user.id} name={user.name} />
    );

  let messages = props.dialogsPage.messages
    .map(message => <Message message={message.message} id={message.id} />);

  let sendMessage = () => {
    let text = postMessage.current.value
    alert(text)
  }

  return (
    <div className={style.dialogs}>
      <div className={style.dialogItems}>
        {dialogsElements}
      </div>
      <div className={style.messages}>
        {messages}
        <textarea className={style.txtArea} ref={postMessage} ></textarea>
        <button className={style.sendButton} onClick={sendMessage}> Send </button>
      </div>
    </div>
  );
};

export default Dialogs;
