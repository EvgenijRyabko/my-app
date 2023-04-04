import React from 'react';
import PostCreate from './PostCreate';
import { updateNewPostTextActionCreator } from '../../../../data/profilePage/profilePage-reducer';
import { addPostActionCreator } from '../../../../data/profilePage/profilePage-reducer';


const PostCreateContainer = (props) => {
    let onPostChange = text => {
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    return (
        <PostCreate updateNewPostText={onPostChange} addPost={addPost} newPostText={props.newPostText} />
    )
}

export default PostCreateContainer;