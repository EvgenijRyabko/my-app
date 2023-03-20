import React from "react";
import classes from "./Dialogs.module.css";
import data from '../../data/dialogs-data.json';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = () => {
  return (
    <section className={classes.dialogs}>
      <h1>Dialogs</h1>
      <div className={classes["dialogs-items"]}>
        {
            data.map((el, i) => <DialogItem key={i} name={el.name} id={el.id} />)
        }
      </div>
      <div className={classes.messages}>
        <Message message="Hi" />
        <Message message="How are your course?" />
        <Message message="Yo" />
      </div>
    </section>
  );
};

export default Dialogs;
