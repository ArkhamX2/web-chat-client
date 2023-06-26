import { IUser } from "./IUser";

export interface IAuth {
    isLoggedIn: boolean,
    user: IUser | null,
    isLoading: boolean,
    error: string,
}

export enum AuthActionTypes {
    REGISTER_SUCCESS = "REGISTER_SUCCESS",
    REGISTER_FETCH = "REGISTER_FETCH",
    REGISTER_FAIL = "REGISTER_FAIL",
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
    LOGIN_FETCH = "LOGIN_FETCH",
    LOGIN_FAIL = "LOGIN_FAIL",
    LOGOUT = "LOGOUT",
}

interface RegisterSuccessAction {
    type: AuthActionTypes.REGISTER_SUCCESS

}

interface RegisterFailAction {
    type: AuthActionTypes.REGISTER_FAIL
    payload: string
}

interface RegisterFetchAction {
    type: AuthActionTypes.REGISTER_FETCH
}

interface LoginSuccessAction {
    type: AuthActionTypes.LOGIN_SUCCESS,
    payload: IUser,
}

interface LoginFailAction {
    type: AuthActionTypes.LOGIN_FAIL
    payload: string
}

interface LoginFetchAction {
    type: AuthActionTypes.LOGIN_FETCH
}

interface LogoutAction {
    type: AuthActionTypes.LOGOUT
}

export type AuthAction = RegisterSuccessAction
    | RegisterFailAction
    | RegisterFetchAction
    | LoginSuccessAction
    | LoginFailAction
    | LoginFetchAction
    | LogoutAction