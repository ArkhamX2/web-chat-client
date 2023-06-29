import { combineReducers } from "redux";
import { AuthReducer } from "./AuthReducer";
import { MessageReducer } from "./MessageReducer";
 

 export const rootReducer = combineReducers({
    auth: AuthReducer,
    message: MessageReducer
 })


 export type RootState = ReturnType<typeof rootReducer>