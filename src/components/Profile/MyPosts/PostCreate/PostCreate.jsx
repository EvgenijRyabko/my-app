import React from 'react';
import classes from './PostCreate.module.css';

function PostCreate({ newPostText, addPost = (f) => f, updateNewPostText = (f) => f }) {
  const newPostElement = React.createRef();

  const onPostChange = () => {
    const text = newPostElement.current.value;
    updateNewPostText(text);
  };

  const onAddPost = () => {
    addPost();
  };

  return (
    <div className={classes['create-area']}>
      <textarea onChange={onPostChange} value={newPostText} ref={newPostElement} />
      <button type="button" onClick={onAddPost}>
        Опубликовать
      </button>
    </div>
  );
}

export default PostCreate;
