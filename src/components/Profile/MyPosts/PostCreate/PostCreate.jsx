import React from "react";
import classes from './PostCreate.module.css';

const PostCreate = (props) => {
    let newPostElement = React.createRef();

    let onPostChange = () => {
        debugger;
        let text = newPostElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text });
    }

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    }

    return (
        <div className={classes['create-area']}>
            <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement} />
            <button type='button' onClick={addPost}>Опубликовать</button>
        </div>
    );
}

export default PostCreate;