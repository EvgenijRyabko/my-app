import React from "react";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = ({dialogsPage}) => {
  return (
    <section className={classes.dialogs}>
      <h1>Dialogs</h1>
      <div className={classes["dialogs-items"]}>
        {
            dialogsPage.dialogs.map((el, i) => <DialogItem key={i} name={el.name} id={el.id} />)
        }
      </div>
      <div className={classes.messages}>
        <Message message="Hi" fromUser={true} />
        <Message message="How are your course?" fromUser={false} />
        <Message message="Yo" fromUser={true} />
      </div>
    </section>
  );
};

export default Dialogs;
