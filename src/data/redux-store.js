import {combineReducers, legacy_createStore as createStore} from 'redux';
import profilePageReducer from './profilePage/profilePage-reducer';
import dialogsPageReducer from './dialogsPage/dialogsPage-reducer';
import sidebarReducer from './sidebar/sidebar-reducer';

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    sidebar: sidebarReducer
});

let store = createStore(reducers);

export default store;