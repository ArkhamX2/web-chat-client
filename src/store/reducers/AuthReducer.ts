import { AuthAction, AuthActionTypes, IAuth } from "../../models/IAuth";

const initialState: IAuth = {
    isLoggedIn: false,
    user: null,
    isLoading: false,
    error: '',
}

export const AuthReducer = (state = initialState, action: AuthAction): IAuth => {
    switch (action.type) {
        case AuthActionTypes.REGISTER_FETCH:
            return { ...state, isLoading: true }

        case AuthActionTypes.REGISTER_SUCCESS:
            return { ...state, isLoading: false, isLoggedIn: false }

        case AuthActionTypes.REGISTER_FAIL:
            return { ...state, isLoading: false, isLoggedIn: false, error: action.payload }

        case AuthActionTypes.LOGIN_FETCH:
            return { ...state, isLoading: true }

        case AuthActionTypes.LOGIN_SUCCESS:
            return { ...state, isLoading: true, isLoggedIn:true, user: action.payload }

        case AuthActionTypes.LOGIN_FAIL:
            return { ...state, isLoading: true, isLoggedIn:false, user:null, error: action.payload}


        case AuthActionTypes.LOGOUT:
            return { ...state, isLoading: false, user: null, isLoggedIn: false }

        default:
            return state
    }
}