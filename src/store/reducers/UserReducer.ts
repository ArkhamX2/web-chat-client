import { IUser, UserAction, UserActionTypes } from "../../models/IUser";

export const initialUserState: IUser = {
    id: '',
    username: '',
    isUserLoading: false,
    userError: ''
}

export const UserReducer = (state = initialUserState, action: UserAction): IUser => {
    switch (action.type) {
        case UserActionTypes.FETCH_USER:
            return { ...state, isUserLoading: true }

        case UserActionTypes.FETCH_USER_ERROR:
            return { ...state, isUserLoading: false, userError: action.payload }

        case UserActionTypes.FETCH_USER_SUCCESS:
            return { ...state, isUserLoading: false, userError: '', username: action.payload }

        case UserActionTypes.CHANGE_USERNAME:
            return { ...state, isUserLoading: true }

        case UserActionTypes.CHANGE_USERNAME_ERROR:
            return { ...state, isUserLoading: false, userError: action.payload }

        case UserActionTypes.CHANGE_USERNAME_SUCCESS:
            return { ...state, isUserLoading: false, userError: '', username: action.payload }

        case UserActionTypes.CHANGE_PASSWORD:
            return { ...state, isUserLoading: true }

        case UserActionTypes.CHANGE_PASSWORD_ERROR:
            return { ...state, isUserLoading: false, userError: action.payload }

        case UserActionTypes.CHANGE_PASSWORD_SUCCESS:
            return { ...state, isUserLoading: false, userError: '', username: action.payload }

        default:
            return state
    }
}