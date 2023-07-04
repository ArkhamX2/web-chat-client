import { IUser } from "./IUser";

export interface IActiveContact {
    activeContactUser: IUser,
    isActiveContactLoading: boolean,
    activeContactError: string,
}

export enum ActiveContactActionTypes {
    SET_ACTIVE_CONTACT = "SET_ACTIVE_CONTACT",
    SET_ACTIVE_CONTACT_ERROR = "SET_ACTIVE_CONTACT_ERROR",
    FETCH_ACTIVE_CONTACT = "FETCH_ACTIVE_CONTACT",
    FETCH_ACTIVE_CONTACT_ERROR = "FETCH_ACTIVE_CONTACT_ERROR",
    FETCH_ACTIVE_CONTACT_SUCCESS = "FETCH_ACTIVE_CONTACT_SUCCESS",
}

interface SetActiveContactAction {
    type: ActiveContactActionTypes.SET_ACTIVE_CONTACT
    payload: string
}

interface SetActiveContactErrorAction {
    type: ActiveContactActionTypes.SET_ACTIVE_CONTACT_ERROR
    payload: string
}

interface FetchActiveContactAction {
    type: ActiveContactActionTypes.FETCH_ACTIVE_CONTACT
}
interface FetchActiveContactErrorAction {
    type: ActiveContactActionTypes.FETCH_ACTIVE_CONTACT_ERROR
    payload: string
}

interface FetchActiveContactSuccessAction {
    type: ActiveContactActionTypes.FETCH_ACTIVE_CONTACT_SUCCESS
    payload: IUser
}

export type ActiveContactAction = SetActiveContactAction
    | SetActiveContactErrorAction
    | FetchActiveContactAction
    | FetchActiveContactErrorAction
    | FetchActiveContactSuccessAction