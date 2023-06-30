import { IRoom, RoomAction, RoomActionTypes } from "../../models/IRoom"


const initialState: IRoom = {
    id: '',
    members: [],
    name: '',
    error: ''
}

export const RoomReducer = (state = initialState, action: RoomAction): IRoom => {
    switch (action.type) {
        case RoomActionTypes.ADD_USER:
            return { ...state, members: action.payload }

        case RoomActionTypes.ADD_USER_ERROR:
            return { ...state, error: action.payload }

        case RoomActionTypes.DELETE_USER:
            return { ...state, members: action.payload}

        case RoomActionTypes.DELETE_USER_ERROR:
            return { ...state, error: action.payload }

        case RoomActionTypes.CHANGE_ROOM_NAME:
            return { ...state, name: action.payload }

        default:
            return state
    }
}