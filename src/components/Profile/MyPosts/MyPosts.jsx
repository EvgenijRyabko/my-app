import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import PostCreateContainer from './PostCreate/PostCreateContainer';

function MyPosts({ posts, newPostText, dispatch = (f) => f }) {
  return (
    <div className={classes.list}>
      <h1>Posts</h1>
      <PostCreateContainer dispatch={dispatch} newPostText={newPostText} />
      {posts.map((el, i) => (
        <Post key={i} message={el.message} likesCount={el.likesCount} />
      ))}
    </div>
  );
}

export default MyPosts;
