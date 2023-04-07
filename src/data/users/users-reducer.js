import users from './users.json';

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

let initialState = {
  users: [...users]
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      let stateCopy = {
        ...state,
        users: state.users.map(user =>  
          user.id === action.userID 
              ? {...user, followed: true} 
              : {...user})
      }

      return stateCopy;
    };
    case UNFOLLOW: {
      let stateCopy = {
        ...state,
        users: state.users.map(user =>  
          user.id === action.userID 
              ? {...user, followed: false} 
              : {...user})
      }

      return stateCopy;
    };
    case SET_USERS: 
      return { ...state, users: [...state.users, ...action.users] }
    default:
        return state;;
  }
};

export const followAC = userID => ({type: FOLLOW, userID: userID});
export const unfollowAC = userID => ({type: UNFOLLOW, userID: userID});
export const setUsersAC = users => ({type: SET_USERS, users: users});

export default usersReducer;
