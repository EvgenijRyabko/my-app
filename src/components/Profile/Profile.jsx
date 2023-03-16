import React from 'react';
import MyPosts from '../MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <section>
            <div className={ classes['profile-header'] }>
                <img alt='none' src='https://i.ytimg.com/vi/EQDu8Mp0OaU/maxresdefault.jpg'></img>
            </div>
            <div>
                <img alt='None'></img>
                ava
            </div>
            <MyPosts />
      </section>
    )
}

export default Profile;