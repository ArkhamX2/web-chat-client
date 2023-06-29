import { MessageAction, MessageActionTypes } from "../../models/IMessage"
import { Dispatch } from "redux"

export const setMessage = (message: string): any => {
    return async (dispatch: Dispatch<MessageAction>) => {
        try {
            dispatch({ type: MessageActionTypes.SET_MESSAGE , payload: message })
        } catch (error) {
            dispatch({ type: MessageActionTypes.MESSAGE_ERROR, payload: 'Не удалось установить сообщение' })
        }
    }
}

export const clearMessage = (): any => {
    return async (dispatch: Dispatch<MessageAction>) => {
        try {
            dispatch({ type: MessageActionTypes.CLEAR_MESSAGE})
        } catch (error) {
            dispatch({ type: MessageActionTypes.MESSAGE_ERROR, payload: 'Не удалось очистить сообщение' })
        }
    }
}