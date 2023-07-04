import { FC } from 'react'
import { IRoom } from '../models/IRoom'

interface RoomListItemProps{
    room: IRoom
}

const RoomListItem: FC<RoomListItemProps> = ({room}) => {
  return (
    <div>
        <h1>{room.roomId}_{room.roomName}</h1>
    </div>
  )
}

export default RoomListItem