import { Dispatch } from "react"
import { RoomListAction, RoomListActionTypes } from "../../models/IRoomList"
import RoomListService from "../../API/services/RoomListService"
import { IUser } from "../../models/IUser"
//import { usersToRooms } from "../../utils/UsersToRooms"
import UserService from "../../API/services/UserService"

export const fetchRooms = (): any => {
    return async (dispatch: Dispatch<RoomListAction>) => {
        try {
            dispatch({ type: RoomListActionTypes.FETCH_ROOM_LIST })

            const response = await UserService.fetchUsers();            
            dispatch({ type: RoomListActionTypes.SUCCESS_FETCH_ROOM_LIST, payload: response.data })
            return Promise.resolve();
        } catch (error) {
            dispatch({ type: RoomListActionTypes.ERROR_ROOM_LIST, payload: 'Не удалось загрузить чаты' })
            return Promise.reject();
        }
    }
}

export const createRoom = (name: string, members: IUser[]): any => {
    return async (dispatch: Dispatch<RoomListAction>) => {
        try {
            const response = await RoomListService.createRoom(name,members);   
            dispatch({ type: RoomListActionTypes.CREATE_ROOM, payload: response.data.rooms })
         
            return Promise.resolve();
        } catch (error) {
            dispatch({ type: RoomListActionTypes.CREATE_ROOM_ERROR, payload: 'Не удалось добавить чат' })
            return Promise.reject();
        }
    }
}

export const deleteRoom = (name: string): any => {
    return async (dispatch: Dispatch<RoomListAction>) => {
        try {
            const response = await RoomListService.deleteRoom(name);   
            dispatch({ type: RoomListActionTypes.DELETE_ROOM, payload: response.data.rooms })
         
            return Promise.resolve();
        } catch (error) {
            dispatch({ type: RoomListActionTypes.DELETE_ROOM_ERROR, payload: 'Не удалось удалить чат' })
            return Promise.reject();
        }
    }
}

