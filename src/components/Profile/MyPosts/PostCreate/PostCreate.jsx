import React from "react";
import classes from './PostCreate.module.css';
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../../data/state";

const PostCreate = (props) => {
    let newPostElement = React.createRef();

    let onPostChange = () => {
        debugger;
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    return (
        <div className={classes['create-area']}>
            <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement} />
            <button type='button' onClick={addPost}>Опубликовать</button>
        </div>
    );
}

export default PostCreate;