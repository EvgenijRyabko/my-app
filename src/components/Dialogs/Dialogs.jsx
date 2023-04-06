import React from "react";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
  let newMessageBody = props.dialogsPage.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  }

  let onMessageUpdate = e => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  }

  return (
    <section className={classes.dialogs}>
      <h1>Dialogs</h1>
      <div className={classes["dialogs-items"]}>
        {
            props.dialogsPage.dialogs.map((el, i) => <DialogItem key={i} name={el.name} id={el.id} />)
        }
      </div>
      <div className={classes.messages}>
        {
          props.dialogsPage.dialogs[0].messages.map((message, i) => <Message key={i} message={message} fromUser={true} />)
        }
      </div>
      <div className={classes["message-create"]}>
        <div>
          <textarea value={ newMessageBody }
                    onChange={ onMessageUpdate } />
        </div>
        <div>
          <button onClick={ onSendMessageClick }>Send message</button>
        </div>
      </div>
    </section>
  );
};

export default Dialogs;
