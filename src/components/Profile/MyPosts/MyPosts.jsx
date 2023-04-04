import React from "react";
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import PostCreateContainer from './PostCreate/PostCreateContainer';

const MyPosts = ( props ) => {
    return (
        <div className={ classes.list }>
            <h1>Posts</h1>
            <PostCreateContainer 
                dispatch={props.dispatch}
                newPostText={props.newPostText} />
            {
                props.posts.map((el, i) => 
                    <Post key={i} message={el.message} likesCount={el.likesCount} />
                )
            }
        </div>
    )
}

export default MyPosts;