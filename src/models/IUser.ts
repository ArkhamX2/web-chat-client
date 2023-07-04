export interface IUser{
    id: string,
    username: string,
    isUserLoading: boolean,
    userError: string,
}

export enum UserActionTypes {
    FETCH_USER = 'FETCH_USER',
    FETCH_USER_ERROR = 'FETCH_USER_ERROR',
    FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',

    CHANGE_USERNAME = 'CHANGE_USERNAME',
    CHANGE_USERNAME_ERROR = 'CHANGE_USERNAME_ERROR',
    CHANGE_USERNAME_SUCCESS = 'CHANGE_USERNAME_SUCCESS',

    CHANGE_PASSWORD = 'CHANGE_PASSWORD',
    CHANGE_PASSWORD_ERROR = 'CHANGE_PASSWORD_ERROR',
    CHANGE_PASSWORD_SUCCESS = 'CHANGE_PASSWORD_SUCCESS',
}

interface FetchUserAction {
    type: UserActionTypes.FETCH_USER,
}

interface FetchUserErrorAction {
    type: UserActionTypes.FETCH_USER_ERROR,
    payload: string,
}

interface FetchUserSuccessAction {
    type: UserActionTypes.FETCH_USER_SUCCESS,
    payload: string,
}

interface ChangeUsernameAction {
    type: UserActionTypes.CHANGE_USERNAME,
}

interface ChangeUsernameErrorAction {
    type: UserActionTypes.CHANGE_USERNAME_ERROR,
    payload: string,
}

interface ChangeUsernameSuccessAction {
    type: UserActionTypes.CHANGE_USERNAME_SUCCESS,
    payload: string,
}

interface ChangePasswordAction {
    type: UserActionTypes.CHANGE_PASSWORD,
}

interface ChangePasswordErrorAction {
    type: UserActionTypes.CHANGE_PASSWORD_ERROR,
    payload: string,
}

interface ChangePasswordSuccessAction {
    type: UserActionTypes.CHANGE_PASSWORD_SUCCESS,
    payload: string,
}

export type UserAction = FetchUserAction
    | FetchUserErrorAction
    | FetchUserSuccessAction
    | ChangeUsernameAction
    | ChangeUsernameErrorAction
    | ChangeUsernameSuccessAction
    | ChangePasswordAction
    | ChangePasswordErrorAction
    | ChangePasswordSuccessAction