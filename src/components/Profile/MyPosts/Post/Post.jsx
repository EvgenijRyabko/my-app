import React from 'react';
import classes from './Post.module.css';

const Post = ({message}) => {
    return (
        <div className={classes.item}>
            <div>
            <img src='https://avatars.mds.yandex.net/i?id=c321e5b50ea88480a491b5d941f6b4d8ca382a4c-8175992-images-thumbs&n=13&exp=1' alt='none' />
            </div>
            <p>{ message }</p>
        </div>
    )
}

export default Post;