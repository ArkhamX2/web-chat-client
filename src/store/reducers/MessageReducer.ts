import { IMessage, MessageAction, MessageActionTypes } from "../../models/IMessage";

const initialState: IMessage={
    text: '',
    error: ''
}

export const MessageReducer=(state = initialState, action: MessageAction): IMessage => {
    switch (action.type){
        case MessageActionTypes.CLEAR_MESSAGE:
            return {...state, text: ''}
        case MessageActionTypes.SET_MESSAGE:
            return {...state, text: action.payload}
        case MessageActionTypes.MESSAGE_ERROR:
            return {...state, text: '', error: action.payload}
        default:
            return state
    }
}