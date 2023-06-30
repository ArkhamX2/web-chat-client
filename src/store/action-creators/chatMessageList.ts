import { Dispatch } from "react"
import { ChatMessageListAction,ChatMessageListActionTypes } from "../../models/IChatMessageList";
import ChatMessageListService from "../../API/services/ChatMessageListService";
import { IChatMessage } from "../../models/IChatMessage";

export const fetchChatMessages = (chatRoomId:string): any => {
    return async (dispatch: Dispatch<ChatMessageListAction>) => {
        try {
            dispatch({ type: ChatMessageListActionTypes.FETCH_CHAT_MESSAGE_LIST })

            const response = await ChatMessageListService.fetchChatMessages(chatRoomId);            
            dispatch({ type: ChatMessageListActionTypes.FETCH_CHAT_MESSAGE_LIST_SUCCESS, payload: response.data.messages })
            return Promise.resolve();
        } catch (error) {
            dispatch({ type: ChatMessageListActionTypes.FETCH_CHAT_MESSAGE_LIST_ERROR, payload: 'Не удалось загрузить сообщения' })
            return Promise.reject();
        }
    }
}

export const sendChatMessage = (message: IChatMessage): any => {
    return async (dispatch: Dispatch<ChatMessageListAction>) => {
        try {
            
            dispatch({ type: ChatMessageListActionTypes.SEND_CHAT_MESSAGE})
            const response = await ChatMessageListService.sendChatMessage(message);   
            dispatch({ type: ChatMessageListActionTypes.SEND_CHAT_MESSAGE_SUCCESS, payload: response.data.messages })
         
            return Promise.resolve();
        } catch (error) {
            dispatch({ type: ChatMessageListActionTypes.SEND_CHAT_MESSAGE_ERROR, payload: 'Не удалось отправить сообщение' })
            return Promise.reject();
        }
    }
}

