import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
//import classes from './Profile.module.css';

const Profile = ({profilePage, dispatch}) => {
    return (
        <section>
            <ProfileInfo />
            <MyPosts 
                posts={profilePage.posts}
                dispatch={dispatch}
                newPostText={profilePage.newPostText}/>
      </section>
    )
}

export default Profile;