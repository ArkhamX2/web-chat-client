import { Dispatch } from "react"
import UserService from "../../API/services/UserService";
import { ActiveContactAction, ActiveContactActionTypes } from "../../models/IActiveContact";

export const fetchActiveContact = (contactId:string): any => {
    return async (dispatch: Dispatch<ActiveContactAction>) => {
        try {
            dispatch({ type: ActiveContactActionTypes.FETCH_ACTIVE_CONTACT })
            const response = await UserService.fetchUser(contactId);            
            dispatch({ type: ActiveContactActionTypes.FETCH_ACTIVE_CONTACT_SUCCESS, payload:{id:response.data.id,username:response.data.id, isUserLoading: false, userError: ''}})
            return Promise.resolve();
        } catch (error) {
            dispatch({ type: ActiveContactActionTypes.FETCH_ACTIVE_CONTACT_ERROR, payload: 'Не удалось загрузить информацию о выбранном контакте' })
            return Promise.reject();
        }
    }
}


export const setActiveContact = (contactId:string): any => {
    return async (dispatch: Dispatch<ActiveContactAction>) => {
        try {
            dispatch({ type: ActiveContactActionTypes.SET_ACTIVE_CONTACT,payload: contactId })
            return Promise.resolve();
        } catch (error) {
            dispatch({ type: ActiveContactActionTypes.SET_ACTIVE_CONTACT_ERROR, payload: 'Не удалось загрузить информацию о выбранном контакте' })
            return Promise.reject();
        }
    }
}
