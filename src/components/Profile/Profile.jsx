import React from 'react';
import Classes from './Profile.module.css';

const Profile = () => {
    return (
        <section className={Classes.profile}>
            <div>
                <img alt='none' src='https://i.ytimg.com/vi/EQDu8Mp0OaU/maxresdefault.jpg'></img>
            </div>
            <div>
                <img alt='None'></img>
                ava
            </div>
            <div>
                post
            </div>
      </section>
    )
}

export default Profile;