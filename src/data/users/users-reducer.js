import users from './users.json';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

const initialState = {
  users: [...users],
};

const usersReducer = (state = initialState, action = null) => {
  switch (action.type) {
    case FOLLOW: {
      const stateCopy = {
        ...state,
        users: state.users.map((user) =>
          user.id === action.userID ? { ...user, followed: true } : { ...user },
        ),
      };

      return stateCopy;
    }
    case UNFOLLOW: {
      const stateCopy = {
        ...state,
        users: state.users.map((user) =>
          user.id === action.userID ? { ...user, followed: false } : { ...user },
        ),
      };

      return stateCopy;
    }
    case SET_USERS:
      return { ...state, users: [...state.users, ...action.users] };
    default:
      return state;
  }
};

export const followAC = (userID) => ({ type: FOLLOW, userID });
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID });
export const setUsersAC = (data) => ({ type: SET_USERS, data });

export default usersReducer;
