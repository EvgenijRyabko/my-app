import React from "react";
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={ classes.list }>
            <Post message="Hello world!" likesCount='0' />
            <Post message="Hi boyzzzz" likesCount='0' />
        </div>
    )
}

export default MyPosts;