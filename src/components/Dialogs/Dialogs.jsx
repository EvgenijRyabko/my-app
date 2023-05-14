import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

function Dialogs({ dialogsPage, sendMessage = (f) => f, updateNewMessageBody = (f) => f }) {
  const { newMessageBody } = dialogsPage;

  const onSendMessageClick = () => {
    sendMessage();
  };

  const onMessageUpdate = (e) => {
    const body = e.target.value;
    updateNewMessageBody(body);
  };

  return (
    <section className={classes.dialogs}>
      <h1>Dialogs</h1>
      <div className={classes['dialogs-items']}>
        {dialogsPage.dialogs.map((el, i) => (
          <DialogItem key={i} name={el.name} id={el.id} />
        ))}
      </div>
      <div className={classes.messages}>
        {dialogsPage.dialogs[0].messages.map((message, i) => (
          <Message key={i} message={message} fromUser />
        ))}
      </div>
      <div className={classes['message-create']}>
        <div>
          <textarea value={newMessageBody} onChange={onMessageUpdate} />
        </div>
        <div>
          <button type="button" onClick={onSendMessageClick}>
            Send message
          </button>
        </div>
      </div>
    </section>
  );
}

export default Dialogs;
