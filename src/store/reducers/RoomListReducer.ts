import { IRoomList, RoomListAction, RoomListActionTypes } from "../../models/IRoomList"


const initialState: IRoomList = {
    rooms: [{roomId:'roomid1',roomName:'roomname1',roomMembers:[{username:'TOM'}], roomError:''}],
    roomListIsLoading: false,
    roomListError: ''
}

export const RoomListReducer = (state = initialState, action: RoomListAction): IRoomList => {
    switch (action.type) {
        case RoomListActionTypes.FETCH_ROOM_LIST:
            return { ...state, roomListIsLoading: true }

        case RoomListActionTypes.SUCCESS_FETCH_ROOM_LIST:
            return { ...state, roomListIsLoading: false, rooms: action.payload }

        case RoomListActionTypes.ERROR_ROOM_LIST:
            return { ...state, roomListIsLoading: false, roomListError: action.payload }

        case RoomListActionTypes.CREATE_ROOM:
            return { ...state, roomListIsLoading: false, rooms: action.payload }

        case RoomListActionTypes.CREATE_ROOM_ERROR:
            return { ...state, roomListIsLoading: false, roomListError: action.payload }

        case RoomListActionTypes.DELETE_ROOM:
            return { ...state, roomListIsLoading: false, rooms: action.payload }

        case RoomListActionTypes.DELETE_ROOM_ERROR:
            return { ...state, roomListIsLoading: false, roomListError: action.payload }

        default:
            return state
    }
}