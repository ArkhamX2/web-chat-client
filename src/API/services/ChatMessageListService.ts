import {AxiosResponse} from 'axios'
import $api from '..'
import { ChatMessageListResponse } from '../../models/response/ChatMessageListResponse'
import { IChatMessage } from '../../models/IChatMessage'


export default class ChatMessageListService{

    static sendChatMessage(message: IChatMessage): Promise<AxiosResponse<ChatMessageListResponse>>{
        return $api.post<ChatMessageListResponse>('/sendMessage', {message})
    }

    static fetchChatMessages(chatRoomId: string): Promise<AxiosResponse<ChatMessageListResponse>>{
        return $api.post<ChatMessageListResponse>('/messages', {chatRoomId})
    }

}