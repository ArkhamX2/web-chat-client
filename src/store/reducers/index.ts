import { combineReducers } from "redux";
import { AuthReducer } from "./AuthReducer";
import { MessageReducer } from "./MessageReducer";
import { RoomListReducer } from "./RoomsReducer";
import { RoomReducer } from "./RoomReducer";


export const rootReducer = combineReducers({
   auth: AuthReducer,
   message: MessageReducer,
   roomList: RoomListReducer,
   room: RoomReducer
})


export type RootState = ReturnType<typeof rootReducer>