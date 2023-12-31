import { Dispatch } from "react"
import { UserAction, UserActionTypes } from "../../models/IUser";
import UserService from "../../API/services/UserService";


export const fetchUser = (userId:string): any => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: UserActionTypes.FETCH_USER})
            const response = await UserService.fetchUser(userId);   

            dispatch({ type: UserActionTypes.FETCH_USER_SUCCESS, payload: response.data.name })
       
            return Promise.resolve();
        } catch (error) {
            dispatch({ type: UserActionTypes.FETCH_USER_ERROR, payload: 'Не удалось получить информацию о пользователе' })
            return Promise.reject();
        }
    }
}

export const changeUsername = (newUsername: string): any => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: UserActionTypes.FETCH_USER})
            const response = await UserService.changeUsername(newUsername);   

            dispatch({ type: UserActionTypes.FETCH_USER_SUCCESS, payload: response.data.name })
       
            return Promise.resolve();
        } catch (error) {
            dispatch({ type: UserActionTypes.FETCH_USER_ERROR, payload: 'Не удалось получить информацию о пользователе' })
            return Promise.reject();
        }
    }
}

export const changePassword = (newPassword: string): any => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: UserActionTypes.CHANGE_PASSWORD})
            const response = await UserService.changePassword(newPassword);   

            dispatch({ type: UserActionTypes.CHANGE_PASSWORD_SUCCESS, payload: response.data.name })
       
            return Promise.resolve();
        } catch (error) {
            dispatch({ type: UserActionTypes.CHANGE_PASSWORD_ERROR, payload: 'Не удалось получить информацию о пользователе' })
            return Promise.reject();
        }
    }
}


