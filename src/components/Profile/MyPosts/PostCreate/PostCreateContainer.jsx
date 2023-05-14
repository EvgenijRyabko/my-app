import { connect } from 'react-redux';
import PostCreate from './PostCreate';
import {
  updateNewPostTextActionCreator,
  addPostActionCreator,
} from '../../../../data/profilePage/profilePage-reducer';

const mapStateToProps = (state) =>
  // Настраивает свойства, которые мы отправим в компоненту
  ({
    newPostText: state.profilePage.newPostText,
  });
const mapDispatchToProps = (dispatch) =>
  // Настраивает коллбэки, которые мы отправим в компоненту
  ({
    updateNewPostText: (text) => {
      const action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  });

const PostCreateContainer = connect(mapStateToProps, mapDispatchToProps)(PostCreate);

export default PostCreateContainer;
