import dialogsPage from "./dialogsPage/dialogsPage";
import profilePage from "./profilePage/profilePage";
import sidebar from "./sidebar/sidebar";
import dialogsPageReducer from "./dialogsPage/dialogsPage-reducer";
import profilePageReducer from "./profilePage/profilePage-reducer";
import sidebarReducer from "./sidebar/sidebar-reducer";

let store = {
  _state: {
    profilePage,
    dialogsPage,
    sidebar,
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {},
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };

    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    // { action = { type: 'ADD-POST', ...}}
    this._state.profilePage = profilePageReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
};

export default store;
