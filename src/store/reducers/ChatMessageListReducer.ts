import { ChatMessageStatus } from "../../models/IChatMessage";
import { ChatMessageListAction, ChatMessageListActionTypes, IChatMessageList } from "../../models/IChatMessageList"
import { IUser } from "../../models/IUser";

const sender:IUser = {
    id:'1',
    isUserLoading:false,
    userError: '',
    username: 'Алиса'
}

const recipient:IUser = {
    id:'1',
    isUserLoading:false,
    userError: '',
    username: 'Иван'
}

const initialState: IChatMessageList = {
    messages: [
        {
            chatMessageRecipient:recipient,
            chatMessageSender:sender,
            chatMessageStatus: ChatMessageStatus.SEND, 
            chatMessageText:'Привет!', 
            chatMessageTimestamp: new Date(),
        },
        {
            chatMessageRecipient:sender,
            chatMessageSender:recipient,
            chatMessageStatus: ChatMessageStatus.SEND, 
            chatMessageText:'Привет,привет!', 
            chatMessageTimestamp: new Date(),
        },
        {
            chatMessageRecipient:recipient,
            chatMessageSender:sender,
            chatMessageStatus: ChatMessageStatus.SEND, 
            chatMessageText:'Как дела?', 
            chatMessageTimestamp: new Date(),
        }
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