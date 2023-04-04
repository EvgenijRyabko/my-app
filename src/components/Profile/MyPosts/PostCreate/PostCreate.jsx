import React from "react";
import classes from './PostCreate.module.css';

const PostCreate = (props) => {
    let newPostElement = React.createRef();

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    let onAddPost = () => {
        props.addPost();
    }

    return (
        <div className={classes['create-area']}>
            <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement} />
            <button type='button' onClick={onAddPost}>Опубликовать</button>
        </div>
    );
}

export default PostCreate;