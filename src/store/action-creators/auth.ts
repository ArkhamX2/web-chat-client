import { Dispatch } from "react"
import { AuthAction, AuthActionTypes } from "../../models/IAuth"
import AuthService from "../../API/services/AuthService"
import axios from "axios"
import { API_URL } from "../../API"
import { AuthResponse } from "../../models/response/AuthResponse"
import { initialUserState } from "../reducers/UserReducer"


export const signup = (name: string, password: string): any => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            dispatch({ type: AuthActionTypes.REGISTER_FETCH })
            // const response = await AuthService.signup(name, password)
            // localStorage.setItem('token', response.headers.authorization)
            dispatch({ type: AuthActionTypes.REGISTER_SUCCESS })
            return Promise.resolve();
        } catch (error) {
            dispatch({ type: AuthActionTypes.REGISTER_FAIL, payload: 'Не удалось зарегистрироваться' })
            return Promise.reject();
        }
    }
}

export const login = (name: string, password: string): any => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            dispatch({ type: AuthActionTypes.LOGIN_FETCH })
            // const response = await AuthService.login(name, password)
            // localStorage.setItem('token', response.headers.authorization)
            dispatch({ type: AuthActionTypes.LOGIN_SUCCESS, payload:initialUserState })
            return Promise.resolve();
        } catch (error) {
            console.log(error);
            dispatch({ type: AuthActionTypes.LOGIN_FAIL, payload: 'Не удалось войти' })
            return Promise.reject();
        }
    }
}

export const logout = (): any => {
    return async (dispatch: Dispatch<AuthAction>) => {
        localStorage.removeItem('token')
        dispatch({ type: AuthActionTypes.LOGOUT })

    }
}

export const checkAuth = (): any => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            //const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, { withCredentials: true })

            dispatch({ type: AuthActionTypes.LOGIN_SUCCESS,  payload:initialUserState})

            return Promise.resolve();
        } catch (error) {
            console.log(error);
        }
    }
}
