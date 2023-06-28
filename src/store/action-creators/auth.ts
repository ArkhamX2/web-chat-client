import { Dispatch } from "react"
import { AuthAction, AuthActionTypes } from "../../models/IAuth"
import AuthService from "../../API/services/AuthService"
import axios from "axios"
import { API_URL } from "../../API"
import { AuthResponse } from "../../models/response/AuthResponse"

export const signup = (email: string, password: string): any => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            dispatch({ type: AuthActionTypes.REGISTER_FETCH })
            const response = await AuthService.signup(email, password)
            console.log(response);
            localStorage.setItem('token', response.data.accessToken)
            dispatch({ type: AuthActionTypes.REGISTER_SUCCESS })

            return Promise.resolve();
        } catch (error) {
            console.log(error);
            dispatch({ type: AuthActionTypes.REGISTER_FAIL, payload: 'Не удалось зарегистрироваться' })

            return Promise.reject();
        }
    }
}

export const login = (email: string, password: string): any => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            // dispatch({ type: AuthActionTypes.LOGIN_FETCH })
            // const response = await AuthService.login(email, password)
            // console.log(response);
            
            // localStorage.setItem('token', response.data.accessToken)
            dispatch({ type: AuthActionTypes.LOGIN_SUCCESS, payload: {email:"test@test.test", id:"1", isActivated: true} })

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
        // const response = await AuthService.logout();
        // console.log(response);
        // localStorage.removeItem('token')
        dispatch({type: AuthActionTypes.LOGOUT})
    }
}

export const checkAuth = ():any => {
    return async (dispatch: Dispatch<AuthAction>) =>{
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true})
            
            localStorage.setItem('token', response.data.accessToken)
            dispatch({ type: AuthActionTypes.LOGIN_SUCCESS, payload: response.data.user })

            return Promise.resolve();
        } catch (error) {
            console.log(error);
        }
    }
}
