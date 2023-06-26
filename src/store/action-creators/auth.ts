import { Dispatch } from "react"
import { AuthAction, AuthActionTypes } from "../../models/IAuth"
import AuthService from "../../API/services/AuthService"

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
            dispatch({ type: AuthActionTypes.LOGIN_FETCH })
            const response = await AuthService.login(email, password)
            console.log(response);
            
            localStorage.setItem('token', response.data.accessToken)
            dispatch({ type: AuthActionTypes.LOGIN_SUCCESS, payload: response.data.user })

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
        const response = await AuthService.logout();
        console.log(response);
        localStorage.removeItem('token')
        dispatch({type: AuthActionTypes.LOGOUT})
    }
}