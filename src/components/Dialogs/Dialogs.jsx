import React from "react";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { sendMessageCreactor, updateNewMessageBodyCreator } from '../../data/state'

const Dialogs = ({ dialogsPage, dispatch }) => {
  let newMessageBody = dialogsPage.newMessageBody;

  let onSendMessageClick = () => {
    dispatch(sendMessageCreactor());
  }

  let onMessageUpdate = e => {
    let body = e.target.value;
    dispatch(updateNewMessageBodyCreator(body));
  }

  return (
    <section className={classes.dialogs}>
      <h1>Dialogs</h1>
      <div className={classes["dialogs-items"]}>
        {
            dialogsPage.dialogs.map((el, i) => <DialogItem key={i} name={el.name} id={el.id} />)
        }
      </div>
      <div className={classes.messages}>
        {
          dialogsPage.dialogs[0].messages.map((message, i) => <Message key={i} message={message} fromUser={true} />)
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
