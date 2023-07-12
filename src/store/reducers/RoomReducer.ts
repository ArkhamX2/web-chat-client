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

        case RoomActionTypes.SET_ROOM_SUCCESS:
            return{...state, 
                roomId: action.payload.roomId, 
                sender: action.payload.sender, 
                recipient: action.payload.recipient, 
                roomName: action.payload.roomName, 
                roomError: action.payload.roomError}

        case RoomActionTypes.SET_ROOM_ERROR:
            return{...state, roomError: action.payload}

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