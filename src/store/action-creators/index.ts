import * as AuthActionCreators from './auth'
import * as MessageActionCreators from './message'

export default{
    ...AuthActionCreators,
    ...MessageActionCreators,
}