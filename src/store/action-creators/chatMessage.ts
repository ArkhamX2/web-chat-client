import { Dispatch } from "react"
import { ChatMessageAction, ChatMessageActionTypes, ChatMessageStatus } from "../../models/IChatMessage";

export const readChatMessage = (): any => {
    return async (dispatch: Dispatch<ChatMessageAction>) => {
        dispatch({ type: ChatMessageActionTypes.READ_CHAT_MESSAGE, payload: ChatMessageStatus.READ })

        return Promise.resolve();
    }
}
