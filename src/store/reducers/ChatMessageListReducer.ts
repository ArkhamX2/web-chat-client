import { ChatMessageStatus } from "../../models/IChatMessage";
import { ChatMessageListAction, ChatMessageListActionTypes, IChatMessageList } from "../../models/IChatMessageList"
import { initialUserState } from "./UserReducer";


const initialState: IChatMessageList = {
    messages: [
        {chatMessageSender:initialUserState,chatMessageStatus: ChatMessageStatus.SEND, chatMessageText:'Hello', chatMessageTimestamp: ''}
],
    chatMessageListError: '',
    isChatMessageListLoading: false,
}

export const ChatMessageListReducer = (state = initialState, action: ChatMessageListAction): IChatMessageList => {
    switch (action.type) {
        case ChatMessageListActionTypes.FETCH_CHAT_MESSAGE_LIST:
            return { ...state, isChatMessageListLoading: true };
        case ChatMessageListActionTypes.FETCH_CHAT_MESSAGE_LIST_ERROR:
            return { ...state, isChatMessageListLoading: false, chatMessageListError: action.payload };
        case ChatMessageListActionTypes.FETCH_CHAT_MESSAGE_LIST_SUCCESS:
            return { ...state, isChatMessageListLoading: false, messages: action.payload }

        case ChatMessageListActionTypes.SEND_CHAT_MESSAGE:
            return { ...state, isChatMessageListLoading: true };
        case ChatMessageListActionTypes.SEND_CHAT_MESSAGE_ERROR:
            return { ...state, isChatMessageListLoading: false, chatMessageListError: action.payload };
        case ChatMessageListActionTypes.SEND_CHAT_MESSAGE_SUCCESS:
            return { ...state, isChatMessageListLoading: false, messages: action.payload }

        default:
            return state
    }
}