import * as AuthActionCreators from './auth'
import * as MessageActionCreators from './message'
import * as RoomActionCreators from './room'
import * as RoomListActionCreators from './roomList'
import * as ChatMessageActionCreators from './chatMessage'
import * as ChatMessageListActionCreators from './chatMessageList'

export default{
    ...AuthActionCreators,
    ...MessageActionCreators,
    ...RoomActionCreators,
    ...RoomListActionCreators,
    ...ChatMessageActionCreators,
    ...ChatMessageListActionCreators
}