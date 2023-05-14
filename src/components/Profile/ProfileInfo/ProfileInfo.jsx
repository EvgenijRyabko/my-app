import React from 'react';
import classes from './ProfileInfo.module.css';

function ProfileInfo() {
  return (
    <section>
      <div className={classes['profile-header']}>
        <img
          alt="none"
          src="https://sun9-44.userapi.com/impf/c858532/v858532226/152b77/jsc2YggtlzI.jpg?size=1590x400&quality=95&crop=77,0,1192,299&sign=f222d99a4a261d97f56f3300f33ff085&type=cover_group"
        />
      </div>
      <div className={classes['user-info']}>
        <div>
          <img
            id="avatar"
            src="https://avatars.mds.yandex.net/i?id=c321e5b50ea88480a491b5d941f6b4d8ca382a4c-8175992-images-thumbs&n=13&exp=1"
            alt="none"
          />
        </div>
        <h1>Username</h1>
      </div>
    </section>
  );
}

export default ProfileInfo;
