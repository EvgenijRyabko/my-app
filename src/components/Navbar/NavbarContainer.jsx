import Navbar from "./Navbar";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    //Настраивает свойства, которые мы отправим в компоненту
    return {
        navigation: state.sidebar.navigation
    }
}

let mapDispatchToProps = (dispatch) => {
    //Настраивает коллбэки, которые мы отправим в компоненту
    return {
    }
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;