import { IUser } from "./IUser";

export interface IRoom {
    members: IUser[],
    name: string,
    id: string,
    error: string,
}

export enum RoomActionTypes {
    
    CHANGE_ROOM_NAME = "CHANGE_ROOM_NAME",
    CHANGE_ROOM_NAME_ERROR = "CHANGE_ROOM_NAME_ERROR",
    ADD_USER = "ADD_USER",
    ADD_USER_ERROR = "ADD_USER_ERROR",
    DELETE_USER = "DELETE_USER",
    DELETE_USER_ERROR = "DELETE_USER_ERROR",
}

interface ChangeRoomNameAction {
    type: RoomActionTypes.CHANGE_ROOM_NAME,
    payload: string,
}
interface ChangeRoomNameErrorAction {
    type: RoomActionTypes.CHANGE_ROOM_NAME_ERROR,
    payload: string,
}

interface AddUserAction {
    type: RoomActionTypes.ADD_USER,
    payload: IUser[],
}

interface DeleteUserAction {
    type: RoomActionTypes.DELETE_USER,
    payload: IUser[],
}

interface AddUserErrorAction {
    type: RoomActionTypes.ADD_USER_ERROR,
    payload: string,
}

interface DeleteUserErrorAction {
    type: RoomActionTypes.DELETE_USER_ERROR,
    payload: string,
}


export type RoomAction = ChangeRoomNameAction
    | ChangeRoomNameErrorAction
    | AddUserAction
    | AddUserErrorAction
    | DeleteUserAction
    | DeleteUserErrorAction