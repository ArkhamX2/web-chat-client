import * as AuthActionCreators from './auth'
import * as MessageActionCreators from './message'
import * as RoomActionCreators from './room'
import * as RoomListActionCreators from './roomList'
import * as ChatMessageActionCreators from './chatMessage'
import * as ChatMessageListActionCreators from './chatMessageList'
import * as UserActionCreators from './user'

export default{
    ...AuthActionCreators,
    ...MessageActionCreators,
    ...RoomActionCreators,
    ...RoomListActionCreators,
    ...ChatMessageActionCreators,
    ...ChatMessageListActionCreators,
    ...UserActionCreators
}