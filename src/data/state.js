import dialogsPage from "./dialogsPage/dialogsPage";
import profilePage from "./profilePage/profilePage";
import sidebar from "./sidebar/sidebar";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

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
    switch (action.type) {
        case ADD_POST:
            let newPost = {
              id: 5,
              message: this._state.profilePage.newPostText,
              likesCount: 0,
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
            break;
        case UPDATE_NEW_POST_TEXT:
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
            break;
        case UPDATE_NEW_MESSAGE_BODY:
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
            break;
        case SEND_MESSAGE:
            let message = this._state.dialogsPage.newMessageBody;
            
            let item = this._state.dialogsPage.dialogs.find(el => {return el.id === "1"});
            item.messages.push(message);
            this._state.dialogsPage.newMessageBody = "";
            this._callSubscriber(this._state);
            break;
        default:
            break;
    }
  },
};

export default store;

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = text => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});

export const sendMessageCreactor = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = text => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: text
});
