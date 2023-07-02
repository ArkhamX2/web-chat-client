import { ChatMessageStatus, IChatMessage,ChatMessageAction,ChatMessageActionTypes } from "../../models/IChatMessage";

const initialState: IChatMessage = {
    chatMessageSender: {username: '', isUserLoading: false, userError:''},
    chatMessageStatus: ChatMessageStatus.SEND,
    chatMessageText: '',
    chatMessageTimestamp: ''
}

export const ChatMessageReducer = (state = initialState, action: ChatMessageAction): IChatMessage => {
    switch (action.type) {
        case ChatMessageActionTypes.READ_CHAT_MESSAGE:
            return { ...state, chatMessageStatus: action.payload};

        default:
            return state
    }
}