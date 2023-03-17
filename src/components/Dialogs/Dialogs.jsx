import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";
import data from '../../data/dialogs-data.json';

const DialogItem = ({ name, id }) => {
  let path = `/dialogs/${id}`;

  return (
    <section className={classes.dialog}>
      <NavLink to={path}>{name}</NavLink>
    </section>
  );
};

const Message = ({ message }) => {
  return <div className={classes.message}>{message}</div>;
};

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
