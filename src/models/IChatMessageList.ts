import { IChatMessage } from "./IChatMessage"

export interface IChatMessageList {
    messages: IChatMessage[],
    isChatMessageListLoading: boolean,
    chatMessageListError: string,
}


export enum ChatMessageListActionTypes {
    FETCH_CHAT_MESSAGE_LIST = "FETCH_CHAT_MESSAGE_LIST",
    FETCH_CHAT_MESSAGE_LIST_ERROR = "FETCH_CHAT_MESSAGE_LIST_ERROR",
    FETCH_CHAT_MESSAGE_LIST_SUCCESS = "FETCH_CHAT_MESSAGE_LIST_SUCCESS",

    SEND_CHAT_MESSAGE = "SEND_CHAT_MESSAGE",
    SEND_CHAT_MESSAGE_ERROR = "SEND_CHAT_MESSAGE_ERROR",
    SEND_CHAT_MESSAGE_SUCCESS = "SEND_CHAT_MESSAGE_SUCCESS",

}

interface FetchChatMessageListAction {
    type: ChatMessageListActionTypes.FETCH_CHAT_MESSAGE_LIST,
}

interface FetchChatMessageListErrorAction {
    type: ChatMessageListActionTypes.FETCH_CHAT_MESSAGE_LIST_ERROR,
    payload: string,
}

interface FetchChatMessageListSuccessAction {
    type: ChatMessageListActionTypes.FETCH_CHAT_MESSAGE_LIST_SUCCESS,
    payload: IChatMessage[],
}

interface SendChatMessageListAction {
    type: ChatMessageListActionTypes.SEND_CHAT_MESSAGE,
}

interface SendChatMessageListErrorAction {
    type: ChatMessageListActionTypes.SEND_CHAT_MESSAGE_ERROR,
    payload: string,
}

interface SendChatMessageListSuccessAction {
    type: ChatMessageListActionTypes.SEND_CHAT_MESSAGE_SUCCESS,
    payload: IChatMessage[],
}


export type ChatMessageListAction = FetchChatMessageListAction
    | FetchChatMessageListErrorAction
    | FetchChatMessageListSuccessAction
    | SendChatMessageListAction
    | SendChatMessageListErrorAction
    | SendChatMessageListSuccessAction