import { IRoom, RoomAction, RoomActionTypes } from "../../models/IRoom"
import { initialUserState } from "./UserReducer"


const initialState: IRoom = {
    roomId: '',
    sender: initialUserState,
    recipient: initialUserState,
    roomName: '',
    roomError: ''
}

export const RoomReducer = (state = initialState, action: RoomAction): IRoom => {
    switch (action.type) {
        case RoomActionTypes.ADD_USER:
            return { ...state  }

        case RoomActionTypes.ADD_USER_ERROR:
            return { ...state, roomError: action.payload }

        case RoomActionTypes.DELETE_USER:
            return { ...state}

        case RoomActionTypes.DELETE_USER_ERROR:
            return { ...state, roomError: action.payload }

        case RoomActionTypes.CHANGE_ROOM_NAME:
            return { ...state, roomName: action.payload }

        default:
            return state
    }
}