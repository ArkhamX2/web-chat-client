import { IRoom, RoomAction, RoomActionTypes } from "../../models/IRoom"


const initialState: IRoom = {
    roomId: '',
    roomMembers: [],
    roomName: '',
    roomError: ''
}

export const RoomReducer = (state = initialState, action: RoomAction): IRoom => {
    switch (action.type) {
        case RoomActionTypes.ADD_USER:
            return { ...state, roomMembers: action.payload }

        case RoomActionTypes.ADD_USER_ERROR:
            return { ...state, roomError: action.payload }

        case RoomActionTypes.DELETE_USER:
            return { ...state, roomMembers: action.payload}

        case RoomActionTypes.DELETE_USER_ERROR:
            return { ...state, roomError: action.payload }

        case RoomActionTypes.CHANGE_ROOM_NAME:
            return { ...state, roomName: action.payload }

        default:
            return state
    }
}