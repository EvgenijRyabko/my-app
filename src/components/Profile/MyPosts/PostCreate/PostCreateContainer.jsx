import PostCreate from './PostCreate';
import { connect } from 'react-redux';
import { updateNewPostTextActionCreator } from '../../../../data/profilePage/profilePage-reducer';
import { addPostActionCreator } from '../../../../data/profilePage/profilePage-reducer';

let mapStateToProps = (state) => {
    //Настраивает свойства, которые мы отправим в компоненту
    return {
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    //Настраивает коллбэки, которые мы отправим в компоненту
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {dispatch(addPostActionCreator());}
    }
}

const PostCreateContainer = connect(mapStateToProps, mapDispatchToProps)(PostCreate);

export default PostCreateContainer;