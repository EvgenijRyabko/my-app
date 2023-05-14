import { combineReducers, legacy_createStore as createStore } from 'redux';
import profilePageReducer from './profilePage/profilePage-reducer';
import dialogsPageReducer from './dialogsPage/dialogsPage-reducer';
import sidebarReducer from './sidebar/sidebar-reducer';
import usersReducer from './users/users-reducer';

const reducers = combineReducers({
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
  usersPage: usersReducer,
  sidebar: sidebarReducer,
});

const store = createStore(reducers);

window.store = store;

export default store;
