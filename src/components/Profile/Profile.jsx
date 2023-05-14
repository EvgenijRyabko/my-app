import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
// import classes from './Profile.module.css';

function Profile({ profilePage, dispatch }) {
  return (
    <section>
      <ProfileInfo />
      <MyPostsContainer />
    </section>
  );
}

export default Profile;
