import { IRoom } from "./IRoom";
import { IUser } from "./IUser";

export interface IRoomList {
    rooms: IRoom[],
    users: IUser[],
    roomListIsLoading: boolean,
    roomListError: string,
}

export enum RoomListActionTypes {
    FETCH_ROOM_LIST = "FETCH_ROOM_LIST",
    SUCCESS_FETCH_ROOM_LIST = "SUCCESS_FETCH_ROOM_LIST",
    ERROR_ROOM_LIST = "ERROR_ROOM_LIST",
    CREATE_ROOM = "CREATE_ROOM",
    CREATE_ROOM_ERROR = "CREATE_ROOM_ERROR",
    DELETE_ROOM = "DELETE_ROOM",
    DELETE_ROOM_ERROR = "DELETE_ROOM_ERROR",
}

interface FetchRoomListAction {
    type: RoomListActionTypes.FETCH_ROOM_LIST,
}

interface SuccessFetchRoomList {
    type: RoomListActionTypes.SUCCESS_FETCH_ROOM_LIST,
    payload: IUser[]
}

interface ErrorRoomAction {
    type: RoomListActionTypes.ERROR_ROOM_LIST,
    payload: string,
}

interface CreateRoomAction {
    type: RoomListActionTypes.CREATE_ROOM,
    payload: IRoom[],
}

interface CreateRoomErrorAction {
    type: RoomListActionTypes.CREATE_ROOM_ERROR,
    payload: string,
}

interface DeleteRoomAction {
    type: RoomListActionTypes.DELETE_ROOM,
    payload: IRoom[],
}

interface DeleteRoomErrorAction {
    type: RoomListActionTypes.DELETE_ROOM_ERROR,
    payload: string,
}

export type RoomListAction = FetchRoomListAction
    | SuccessFetchRoomList
    | ErrorRoomAction
    | CreateRoomAction
    | CreateRoomErrorAction
    | DeleteRoomAction
    | DeleteRoomErrorAction