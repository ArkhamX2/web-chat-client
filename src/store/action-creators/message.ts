import { MessageAction, MessageActionTypes } from "../../models/IMessage"
import { Dispatch } from "redux"

export const setMessage = (message: string): any => {
    return async (dispatch: Dispatch<MessageAction>) => {
        try {
            dispatch({ type: MessageActionTypes.SET_MESSAGE , payload: message })
            return Promise.resolve()
        } catch (error) {
            dispatch({ type: MessageActionTypes.MESSAGE_ERROR, payload: 'Не удалось установить сообщение' })
            
            return Promise.reject()
        }
    }
}

export const clearMessage = (): any => {
    return async (dispatch: Dispatch<MessageAction>) => {
        try {
            dispatch({ type: MessageActionTypes.CLEAR_MESSAGE})
            
            return Promise.resolve()
        } catch (error) {
            dispatch({ type: MessageActionTypes.MESSAGE_ERROR, payload: 'Не удалось очистить сообщение' })
            
            return Promise.reject()
        }
    }
}