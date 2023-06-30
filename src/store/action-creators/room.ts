import { Dispatch } from "react"
import { RoomAction, RoomActionTypes } from "../../models/IRoom";
import { IUser } from "../../models/IUser";
import RoomService from "../../API/services/RoomService";


export const addUser = (user: IUser): any => {
    return async (dispatch: Dispatch<RoomAction>) => {
        try {
            const response = await RoomService.addUser(user);   

            dispatch({ type: RoomActionTypes.ADD_USER, payload: response.data.members })
       
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

            dispatch({ type: RoomActionTypes.DELETE_USER, payload: response.data.members })
       
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

            dispatch({type: RoomActionTypes.CHANGE_ROOM_NAME, payload: response.data.name})
            
            return Promise.resolve();
        } catch (error) {
            
            dispatch({ type: RoomActionTypes.CHANGE_ROOM_NAME_ERROR, payload: 'Не удалось изменить название чата' })
            return Promise.reject();
        }
    }
}
