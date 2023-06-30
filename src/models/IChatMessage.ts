import { IUser } from "./IUser";

export enum ChatMessageStatus{
    SEND = "SEND",
    RECEIVED = "RECEIVED",
    READ = "READ"
}

export interface IChatMessage{
    chatMessageText: string,
    chatMessageStatus: ChatMessageStatus,
    chatMessageSender: IUser,
}

export enum ChatMessageActionTypes{
    READ_CHAT_MESSAGE = "READ_CHAT_MESSAGE",
}

interface ReadChatMessageAction{
    type: ChatMessageActionTypes.READ_CHAT_MESSAGE
    payload: ChatMessageStatus;
}

export type ChatMessageAction = ReadChatMessageAction