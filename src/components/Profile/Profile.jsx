import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
//import classes from './Profile.module.css';

const Profile = ({profilePage, addPost, updateNewPostText}) => {
    return (
        <section>
            <ProfileInfo />
            <MyPosts 
                posts={profilePage.posts}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
                newPostText={profilePage.newPostText}/>
      </section>
    )
}

export default Profile;