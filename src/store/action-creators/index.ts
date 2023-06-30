import * as AuthActionCreators from './auth'
import * as MessageActionCreators from './message'
import * as RoomActionCreators from './room'
import * as RoomListActionCreators from './roomList'

export default{
    ...AuthActionCreators,
    ...MessageActionCreators,
    ...RoomActionCreators,
    ...RoomListActionCreators
}