import RoomListItem from './RoomListItem'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'
import MolchatLoader from './UI/Loader/MolchatLoader'


const RoomList = () => {
    
const {roomListIsLoading, rooms, roomListError} = useTypedSelector(state => state.roomList)
const {createRoom, deleteRoom} = useActions()

    if(roomListIsLoading){
        return(
            <MolchatLoader/>
        )
    }

    if(roomListError){
        return(
            <h1>{roomListError}</h1>
        )
    }

  return (
    <div>
        <div>
            <button onClick={()=>createRoom('test',[{username:'qwerty'},{username:'BOBINSKY'}])}>Добавить чат</button>
            <button onClick={()=>deleteRoom('test')}>Удалить чат</button>
        </div>
        {rooms.map((room)=>(
            <RoomListItem key={room.roomId} room ={room}/>
        ))}
    </div>
  )
}

export default RoomList