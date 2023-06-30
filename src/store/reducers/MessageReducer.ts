import { IMessage, MessageAction, MessageActionTypes } from "../../models/IMessage";

const initialState: IMessage={
    text: '',
    messageError: ''
}

export const MessageReducer=(state = initialState, action: MessageAction): IMessage => {
    switch (action.type){
        case MessageActionTypes.CLEAR_MESSAGE:
            return { text: '', messageError: ''}
        case MessageActionTypes.SET_MESSAGE:
            return {text: action.payload, messageError: ''}
        case MessageActionTypes.MESSAGE_ERROR:
            return {text: '', messageError: action.payload}
        default:
            return state
    }
}