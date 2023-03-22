import React from "react";
import classes from './PostCreate.module.css';

const PostCreate = () => {
    return (
        <div className={classes['create-area']}>
            <textarea />
            <button type='button' onClick={() => { alert('Hey!'); }}>Опубликовать</button>
        </div>
    );
}

export default PostCreate;