import React from 'react';
// import users from '../../data/users/users.json';

function Users({ users, follow = (f) => f, unfollow = (f) => f, setUsers = (f) => f }) {
  if (users.length === 0) {
    setUsers(users);
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <span>
            <div>
              <img alt="none" src={user.profileImage} />
            </div>
            <div>
              {user.followed ? (
                <button type="button" onClick={() => unfollow(user.id)}>
                  Unfollow
                </button>
              ) : (
                <button type="button" onClick={() => follow(user.id)}>
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{user.fullName}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{user.location.country}</div>
              <div>{user.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}

export default Users;
