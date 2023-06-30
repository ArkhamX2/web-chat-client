import { FC } from 'react'
import { IRoom } from '../models/IRoom'

interface RoomListItemProps{
    room: IRoom
}

const RoomListItem: FC<RoomListItemProps> = ({room}) => {
  return (
    <div>
        <h1>{room.id}_{room.name}</h1>
        {room.members.map((member)=>(
            <p>{member.name}</p>
        ))}
    </div>
  )
}

export default RoomListItem