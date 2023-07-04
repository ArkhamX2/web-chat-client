import { IUser } from "./IUser";

export interface IRoom {
    recipient: IUser,
    sender: IUser,
    roomName: string,
    roomId: string,
    roomError: string,
}

export enum RoomActionTypes {
    SET_ROOM_SUCCESS = "SET_ROOM_SUCCESS",
    SET_ROOM_ERROR = "SET_ROOM_ERROR",
    CHANGE_ROOM_NAME = "CHANGE_ROOM_NAME",
    CHANGE_ROOM_NAME_ERROR = "CHANGE_ROOM_NAME_ERROR",
    ADD_USER = "ADD_USER",
    ADD_USER_ERROR = "ADD_USER_ERROR",
    DELETE_USER = "DELETE_USER",
    DELETE_USER_ERROR = "DELETE_USER_ERROR",
}

interface SetRoomSuccess {
    type: RoomActionTypes.SET_ROOM_SUCCESS,
    payload: IRoom
}

interface SetRoomError {
    type: RoomActionTypes.SET_ROOM_ERROR,
    payload: string
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


export type RoomAction =
    | SetRoomSuccess
    | SetRoomError
    | ChangeRoomNameAction
    | ChangeRoomNameErrorAction
    | AddUserAction
    | AddUserErrorAction
    | DeleteUserAction
    | DeleteUserErrorAction