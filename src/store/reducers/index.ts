import { combineReducers } from "redux";
import { AuthReducer } from "./AuthReducer";
import { MessageReducer } from "./MessageReducer";
import { RoomListReducer } from "./RoomListReducer";
import { RoomReducer } from "./RoomReducer";
import { ChatMessageReducer } from "./ChatMessageReducer";
import { ChatMessageListReducer } from "./ChatMessageListReducer";
import { UserReducer } from "./UserReducer";


export const rootReducer = combineReducers({
   auth: AuthReducer,
   message: MessageReducer,
   roomList: RoomListReducer,
   room: RoomReducer,
   chatMessage: ChatMessageReducer,
   chatMessageList: ChatMessageListReducer,
   user: UserReducer,
})


export type RootState = ReturnType<typeof rootReducer>