import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./DialogItem.module.css";

const DialogItem = ({ name, id }) => {
    let path = `/dialogs/${id}`;
  
    return (
      <section className={classes.dialog}>
        <NavLink to={path}>{name}</NavLink>
      </section>
    );
};

export default DialogItem;