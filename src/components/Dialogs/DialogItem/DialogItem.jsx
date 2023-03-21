import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./DialogItem.module.css";

const DialogItem = ({ name, id }) => {
    let path = `/dialogs/${id}`;
  
    return (
      <section className={classes.dialog}>
        <img src='https://avatars.mds.yandex.net/i?id=c321e5b50ea88480a491b5d941f6b4d8ca382a4c-8175992-images-thumbs&n=13&exp=1' alt='none' />
        <NavLink to={path}>{name}</NavLink>
      </section>
    );
};

export default DialogItem;