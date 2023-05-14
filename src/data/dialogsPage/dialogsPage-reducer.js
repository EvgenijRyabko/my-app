import dialogs from './dialogs/dialogs';
import messages from './messages/messages';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
  dialogs,
  messages,
  newMessageBody: '',
};

const dialogsPageReducer = (state = initialState, action = null) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      return {
        ...state,
        newMessageBody: action.body,
      };
    }
    case SEND_MESSAGE: {
      const message = state.newMessageBody;

      const stateCopy = {
        ...state,
        dialogs: [...state.dialogs],
        newMessageBody: '',
      };

      const item = stateCopy.dialogs.find((el) => el.id === '1');
      item.messages.push(message);

      return stateCopy;
    }
    default:
      return state;
  }
};

export const sendMessageCreactor = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: text,
});

export default dialogsPageReducer;
