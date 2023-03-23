import dialogsPage from "./dialogsPage/dialogsPage";
import profilePage from "./profilePage/profilePage";
import sidebar from "./sidebar/sidebar";

let rerenderEntireTree = () => {}

let state = {
    profilePage,
    dialogsPage,
    sidebar
}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText  = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}



export default state;