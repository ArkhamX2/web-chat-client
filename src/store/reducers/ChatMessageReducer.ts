import { ChatMessageStatus, IChatMessage,ChatMessageAction,ChatMessageActionTypes } from "../../models/IChatMessage";
import { initialUserState } from "./UserReducer";

const initialState: IChatMessage = {
    chatMessageRecipient: initialUserState,
    chatMessageSender: initialUserState,
    chatMessageStatus: ChatMessageStatus.SEND,
    chatMessageText: '',
    chatMessageTimestamp: new Date(),
}

export const ChatMessageReducer = (state = initialState, action: ChatMessageAction): IChatMessage => {
    switch (action.type) {
        case ChatMessageActionTypes.READ_CHAT_MESSAGE:
            return { ...state, chatMessageStatus: action.payload};

        default:
            return state
    }
}