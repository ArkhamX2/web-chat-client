export interface IMessage {
    text: string,
    messageError: string,
}

export enum MessageActionTypes {
    SET_MESSAGE = "SET_MESSAGE",
    CLEAR_MESSAGE = "CLEAR_MESSAGE",
    MESSAGE_ERROR = "MESSAGE_ERROR"
}

interface SetMessageAction {
    type: MessageActionTypes.SET_MESSAGE
    payload: string,
}

interface ClearMessageAction {
    type: MessageActionTypes.CLEAR_MESSAGE
}

interface MessageErrorAction {
    type: MessageActionTypes.MESSAGE_ERROR,
    payload: string
}


export type MessageAction = SetMessageAction
    | ClearMessageAction
    | MessageErrorAction