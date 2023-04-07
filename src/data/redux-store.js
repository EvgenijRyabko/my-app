import {combineReducers, legacy_createStore as createStore} from 'redux';
import profilePageReducer from './profilePage/profilePage-reducer';
import dialogsPageReducer from './dialogsPage/dialogsPage-reducer';
import sidebarReducer from './sidebar/sidebar-reducer';
import usersReducer from './users/users-reducer';

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer
});

let store = createStore(reducers);

window.store = store;

export default store;