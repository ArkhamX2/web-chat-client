import RoomListItem from './RoomListItem'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'


const RoomList = () => {
    
const {isLoading, rooms, error} = useTypedSelector(state => state.roomList)
const {createRoom, deleteRoom} = useActions()

  return (
    <div>
        <div>
            <button onClick={()=>createRoom('test',[{name:'qwerty'},{name:'BOBINSKY'}])}>Добавить чат</button>
            <button onClick={()=>deleteRoom('test')}>Удалить чат</button>
        </div>
        {rooms.map((room)=>(
            <RoomListItem key={room.id} room ={room}/>
        ))}
    </div>
  )
}

export default RoomList