import { AuthAction, AuthActionTypes, IAuth } from "../../models/IAuth";
import { initialUserState } from "./UserReducer";

const initialState: IAuth = {
    isLoggedIn: false,
    authUser: {id: '', username: '', isUserLoading: false, userError: ''},
    isAuthLoading: false,
    authError: '',
}

export const AuthReducer = (state = initialState, action: AuthAction): IAuth => {
    switch (action.type) {
        case AuthActionTypes.REGISTER_FETCH:
            return { ...state, isAuthLoading: true }

        case AuthActionTypes.REGISTER_SUCCESS:
            return { ...state, isAuthLoading: false, isLoggedIn: false }

        case AuthActionTypes.REGISTER_FAIL:
            return { ...state, isAuthLoading: false, isLoggedIn: false, authError: action.payload }

        case AuthActionTypes.LOGIN_FETCH:
            return { ...state, isAuthLoading: true }

        case AuthActionTypes.LOGIN_SUCCESS:
            return { ...state, isAuthLoading: false, isLoggedIn:true, authUser: action.payload }

        case AuthActionTypes.LOGIN_FAIL:
            return { ...state, isAuthLoading: false, isLoggedIn:false, authUser:initialUserState, authError: action.payload}

        case AuthActionTypes.LOGOUT:
            return { ...state, isAuthLoading: false, authUser:initialUserState, isLoggedIn: false }

        default:
            return state
    }
}