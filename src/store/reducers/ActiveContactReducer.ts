import { ActiveContactAction, ActiveContactActionTypes, IActiveContact } from "../../models/IActiveContact";
import { initialUserState } from "./UserReducer";

const initialState: IActiveContact = {
    activeContactUser: initialUserState,
    activeContactError: '',
    isActiveContactLoading: false,
}

export const ActiveContactReducer = (state = initialState, action: ActiveContactAction): IActiveContact => {
    switch (action.type) {
        case ActiveContactActionTypes.SET_ACTIVE_CONTACT:
            return { ...state, isActiveContactLoading: true }

        case ActiveContactActionTypes.FETCH_ACTIVE_CONTACT:
            return { ...state, isActiveContactLoading: true }

        case ActiveContactActionTypes.FETCH_ACTIVE_CONTACT_ERROR:
            return { ...state, isActiveContactLoading: false, activeContactError: action.payload }

        case ActiveContactActionTypes.FETCH_ACTIVE_CONTACT_SUCCESS:
            return { ...state, isActiveContactLoading: false, activeContactUser: action.payload }


        default:
            return state
    }
}