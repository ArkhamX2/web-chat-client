import { IRoomList, RoomListAction, RoomListActionTypes } from "../../models/IRoomList"


const initialState: IRoomList = {
    rooms: [],
    isLoading: false,
    error: ''
}

export const RoomListReducer = (state = initialState, action: RoomListAction): IRoomList => {
    switch (action.type) {
        case RoomListActionTypes.FETCH_ROOM_LIST:
            return { ...state, isLoading: true }

        case RoomListActionTypes.SUCCESS_FETCH_ROOM_LIST:
            return { ...state, isLoading: false, rooms: action.payload }

        case RoomListActionTypes.ERROR_ROOM_LIST:
            return { ...state, isLoading: false, error: action.payload }

        case RoomListActionTypes.CREATE_ROOM:
            return { ...state, isLoading: false, rooms: action.payload }

        case RoomListActionTypes.CREATE_ROOM_ERROR:
            return { ...state, isLoading: false, error: action.payload }

        case RoomListActionTypes.DELETE_ROOM:
            return { ...state, isLoading: false, rooms: action.payload }

        case RoomListActionTypes.DELETE_ROOM_ERROR:
            return { ...state, isLoading: false, error: action.payload }

        default:
            return state
    }
}