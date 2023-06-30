import { useState } from 'react'
import RoomListItem from './RoomListItem'


const RoomList = () => {
    
const [rooms, setRooms] = useState<string[]>(['Bob','Tom','Alice'])

  return (
    <div>
        {rooms.map((room)=>(
            <RoomListItem />
        ))}
    </div>
  )
}

export default RoomList