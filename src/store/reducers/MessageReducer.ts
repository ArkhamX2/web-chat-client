import { IMessage, MessageAction, MessageActionTypes } from "../../models/IMessage";

const initialState: IMessage={
    text: '',
    error: ''
}

export const MessageReducer=(state = initialState, action: MessageAction): IMessage => {
    switch (action.type){
        case MessageActionTypes.CLEAR_MESSAGE:
            return { text: '', error: ''}
        case MessageActionTypes.SET_MESSAGE:
            return {text: action.payload, error: ''}
        case MessageActionTypes.MESSAGE_ERROR:
            return {text: '', error: action.payload}
        default:
            return state
    }
}