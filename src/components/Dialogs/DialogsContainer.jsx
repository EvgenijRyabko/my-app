import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import {
  sendMessageCreactor,
  updateNewMessageBodyCreator,
} from '../../data/dialogsPage/dialogsPage-reducer';

const mapStateToProps = (state) =>
  // Настраивает свойства, которые мы отправим в компоненту
  ({
    dialogsPage: state.dialogsPage,
  });
const mapDispatchToProps = (dispatch) =>
  // Настраивает коллбэки, которые мы отправим в компоненту
  ({
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreactor());
    },
  });
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
