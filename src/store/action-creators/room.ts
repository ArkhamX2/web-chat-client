import { Dispatch } from "react"
import { IRoom, RoomAction, RoomActionTypes } from "../../models/IRoom";
import { IUser } from "../../models/IUser";
import RoomService from "../../API/services/RoomService";

export const setRoom = (room: IRoom): any => {
    return async (dispatch: Dispatch<RoomAction>) => {
        try {
            dispatch({ type: RoomActionTypes.SET_ROOM_SUCCESS, payload: room})
            return Promise.resolve();
        } catch (error) {
            dispatch({ type: RoomActionTypes.SET_ROOM_ERROR, payload: 'Не удалось выбрать чат' })
            return Promise.reject();
        }
    }
}

export const addUser = (user: IUser): any => {
    return async (dispatch: Dispatch<RoomAction>) => {
        try {
            const response = await RoomService.addUser(user);   

            dispatch({ type: RoomActionTypes.ADD_USER, payload: [response.data.recipient, response.data.sender] })
       
            return Promise.resolve();
        } catch (error) {
            dispatch({ type: RoomActionTypes.ADD_USER_ERROR, payload: 'Не удалось добавить пользователя в чат' })
            return Promise.reject();
        }
    }
}


export const deleteUser = (user: IUser): any => {
    return async (dispatch: Dispatch<RoomAction>) => {
        try {
            const response = await RoomService.deleteUser(user);   

            dispatch({ type: RoomActionTypes.DELETE_USER, payload: [response.data.recipient, response.data.sender] })
       
            return Promise.resolve();
        } catch (error) {
            dispatch({ type: RoomActionTypes.DELETE_USER_ERROR, payload: 'Не удалось удалить пользователя из чата' })
            return Promise.reject();
        }
    }
}

export const changeRoomName = (name: string): any =>{
    return async (dispatch: Dispatch<RoomAction>) => {
        try {
            const response = await RoomService.changeRoomName(name);

            dispatch({type: RoomActionTypes.CHANGE_ROOM_NAME, payload: response.data.roomName})
            
            return Promise.resolve();
        } catch (error) {
            
            dispatch({ type: RoomActionTypes.CHANGE_ROOM_NAME_ERROR, payload: 'Не удалось изменить название чата' })
            return Promise.reject();
        }
    }
}
