import dialogsPage from "./dialogsPage/dialogsPage";
import profilePage from "./profilePage/profilePage";
import sidebar from "./sidebar/sidebar";

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
    debugger;
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
              id: 5,
              message: this._state.profilePage.newPostText,
              likesCount: 0,
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
            break;
        case 'UPDATE-NEW-POST-TEXT':
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
            break;
        default:
            break;
    }
  },
};

export default store;
