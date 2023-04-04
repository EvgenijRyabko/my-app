import dialogs from "./dialogs/dialogs";
import messages from "./messages/messages";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: dialogs,
    messages: messages,
    newMessageBody: ""
};

const dialogsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            break;
        case SEND_MESSAGE:
            let message = state.newMessageBody;
            
            let item = state.dialogs.find(el => {return el.id === "1"});
            item.messages.push(message);
            state.newMessageBody = "";
            break;
        default:
            break;
    }

    return state;
}

export const sendMessageCreactor = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = text => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: text
});

export default dialogsPageReducer;