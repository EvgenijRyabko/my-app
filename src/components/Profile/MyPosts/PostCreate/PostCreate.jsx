import React from "react";
import classes from './PostCreate.module.css';

const PostCreate = (props) => {
    let newPostElement = React.createRef();

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={classes['create-area']}>
            <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement} />
            <button type='button' onClick={props.addPost}>Опубликовать</button>
        </div>
    );
}

export default PostCreate;