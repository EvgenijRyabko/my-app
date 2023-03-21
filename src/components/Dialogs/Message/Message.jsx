import React from "react";
import classes from "./Message.module.css";

const Message = ({ message, fromUser }) => {
    return (
        <div className={fromUser ? `${classes.message}` : `${classes.message} ${classes.guest}`}>
            <img src='https://avatars.mds.yandex.net/i?id=c321e5b50ea88480a491b5d941f6b4d8ca382a4c-8175992-images-thumbs&n=13&exp=1' alt='none' />
            <h3>User</h3>
            <p>{message}</p>
        </div>
    );
};


export default Message;