import { connect } from 'react-redux';
import Navbar from './Navbar';

const mapStateToProps = (state) =>
  // Настраивает свойства, которые мы отправим в компоненту
  ({
    navigation: state.sidebar.navigation,
  });
const mapDispatchToProps = (dispatch) =>
  // Настраивает коллбэки, которые мы отправим в компоненту
  ({});
const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;
