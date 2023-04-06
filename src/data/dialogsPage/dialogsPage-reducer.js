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
        case UPDATE_NEW_MESSAGE_BODY:{
            return {
                ...state,
                newMessageBody: action.body
            };
        }
        case SEND_MESSAGE:{
            let message = state.newMessageBody;

            let stateCopy = {
                ...state,
                dialogs: [...state.dialogs],
                newMessageBody: ''
            };
            
            let item = stateCopy.dialogs.find(el => {return el.id === "1"});
            item.messages.push(message);
            
            return stateCopy;
        }
        default:
            return state;
    }
}

export const sendMessageCreactor = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = text => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: text
});

export default dialogsPageReducer;