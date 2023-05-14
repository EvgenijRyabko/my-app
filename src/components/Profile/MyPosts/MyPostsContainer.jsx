import { connect } from 'react-redux';
import MyPosts from './MyPosts';

const mapStateToProps = (state) =>
  // Настраивает свойства, которые мы отправим в компоненту
  ({
    posts: state.profilePage.posts,
  });
const mapDispatchToProps = (dispatch) =>
  // Настраивает коллбэки, которые мы отправим в компоненту
  ({});
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
