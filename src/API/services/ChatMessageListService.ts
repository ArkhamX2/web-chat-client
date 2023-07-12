import axios, {AxiosResponse} from 'axios'
import $chatApi, { CHAT_API_URL } from '../index'
import { ChatMessageListResponse } from '../../models/response/ChatMessageListResponse'
import { IChatMessage } from '../../models/IChatMessage'


export default class ChatMessageListService{

    static sendChatMessage(message: IChatMessage): Promise<AxiosResponse<ChatMessageListResponse>>{
        return $chatApi.post<ChatMessageListResponse>('/sendMessage', {message})
    }

    static fetchChatMessages(senderId: string,recipientId: string): Promise<AxiosResponse<ChatMessageListResponse>>{
        return axios.get<ChatMessageListResponse>(CHAT_API_URL+'/messages/'+senderId + "/" + recipientId)
    }

}