import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
//import classes from './Profile.module.css';

const Profile = () => {
    return (
        <section>
            <ProfileInfo />
            <MyPosts />
      </section>
    )
}

export default Profile;