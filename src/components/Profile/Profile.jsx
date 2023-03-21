import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
//import classes from './Profile.module.css';

const Profile = ({profilePage}) => {
    return (
        <section>
            <ProfileInfo />
            <MyPosts posts={profilePage.posts}/>
      </section>
    )
}

export default Profile;