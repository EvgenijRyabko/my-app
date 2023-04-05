import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import { sendMessageCreactor } from "../../data/dialogsPage/dialogsPage-reducer";
import { updateNewMessageBodyCreator } from "../../data/dialogsPage/dialogsPage-reducer";

let mapStateToProps = (state) => {
    //Настраивает свойства, которые мы отправим в компоненту
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    //Настраивает коллбэки, которые мы отправим в компоненту
    return {
        updateNewMessageBody: (body) => { dispatch(updateNewMessageBodyCreator(body)); },
        sendMessage: () => { dispatch(sendMessageCreactor()); }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;