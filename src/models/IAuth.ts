import { IUser } from "./IUser";

export interface IAuth {
    isLoggedIn: boolean,
    authUser: IUser | null,
    isAuthLoading: boolean,
    authError: string,
}

export enum AuthActionTypes {
    REGISTER_SUCCESS = "REGISTER_SUCCESS",
    REGISTER_FETCH = "REGISTER_FETCH",
    REGISTER_FAIL = "REGISTER_FAIL",
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
    LOGIN_FETCH = "LOGIN_FETCH",
    LOGIN_FAIL = "LOGIN_FAIL",
    LOGOUT = "LOGOUT",
    CHECK_AUTH = "CHECK_AUTH",
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

interface CheckAuthAction {
    type: AuthActionTypes.CHECK_AUTH,
    payload: boolean,
}

export type AuthAction = RegisterSuccessAction
    | RegisterFailAction
    | RegisterFetchAction
    | LoginSuccessAction
    | LoginFailAction
    | LoginFetchAction
    | LogoutAction
    | CheckAuthAction