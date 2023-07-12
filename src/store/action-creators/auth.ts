import { Dispatch } from "react"
import { AuthAction, AuthActionTypes } from "../../models/IAuth"
import AuthService from "../../API/services/AuthService"

export const signup = (name: string, password: string): any => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            dispatch({ type: AuthActionTypes.REGISTER_FETCH })
            const response = await AuthService.signup(name, password)
            localStorage.setItem('token', response.headers.authorization)
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
            const response = await AuthService.login(name, password)
            localStorage.setItem('token', response.headers.authorization)
            dispatch({ type: AuthActionTypes.LOGIN_SUCCESS, payload:{id:response.data.id, username: response.data.name,isUserLoading: false ,userError: ''} })
            console.log(response);
            
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
