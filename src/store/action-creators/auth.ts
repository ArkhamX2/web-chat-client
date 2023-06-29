import { Dispatch } from "react"
import { AuthAction, AuthActionTypes } from "../../models/IAuth"
import AuthService from "../../API/services/AuthService"
import axios from "axios"
import { API_URL } from "../../API"
import { AuthResponse } from "../../models/response/AuthResponse"
import { useActions } from "../../hooks/useActions"
import { useTypedSelector } from "../../hooks/useTypedSelector"

const { setMessage, clearMessage } = useActions();
const { text } = useTypedSelector(state => state.message)

export const signup = (name: string, password: string): any => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            dispatch({ type: AuthActionTypes.REGISTER_FETCH })
            const response = await AuthService.signup(name, password)
            localStorage.setItem('token', response.headers.authorization)

            console.log(response);
            dispatch({ type: AuthActionTypes.REGISTER_SUCCESS })

            setMessage("Регистрация прошла успешно!");
            console.log(text);
            clearMessage();
            console.log(text);

            return Promise.resolve();
        } catch (error) {
            console.log(error);
            dispatch({ type: AuthActionTypes.REGISTER_FAIL, payload: 'Не удалось зарегистрироваться' })

            setMessage("Регистрация не удалась. Попробуйте ещё раз")
            console.log(text);

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

            console.log(response);
            dispatch({ type: AuthActionTypes.LOGIN_SUCCESS, payload: response.data.user })

            setMessage("Авторизация прошла успешно!");
            console.log(text);
            clearMessage();
            console.log(text);

            return Promise.resolve();
        } catch (error) {
            console.log(error);

            dispatch({ type: AuthActionTypes.LOGIN_FAIL, payload: 'Не удалось войти' })

            setMessage("Авторизация не удалась. Попробуйте ещё раз")
            console.log(text);

            return Promise.reject();
        }
    }
}


//Информация о том, что пользователь вышел. Очистить токен и перенаправить на авторизацию
export const logout = (): any => {
    return async (dispatch: Dispatch<AuthAction>) => {
        localStorage.removeItem('token')
        dispatch({ type: AuthActionTypes.LOGOUT })

        setMessage('Выход произведён успешно.');
        console.log(text);
        
    }
}

export const checkAuth = (): any => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, { withCredentials: true })

            dispatch({ type: AuthActionTypes.LOGIN_SUCCESS, payload: response.data.user })

            return Promise.resolve();
        } catch (error) {
            console.log(error);
        }
    }
}
