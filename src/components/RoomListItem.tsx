import { FC } from 'react'
import { IRoom } from '../models/IRoom'
import { useActions } from '../hooks/useActions'

interface RoomListItemProps{
    room: IRoom
}

const RoomListItem: FC<RoomListItemProps> = ({room}) => {

  const {setActiveContact} = useActions()

  return (
    <div onClick={() => setActiveContact(room.recipient.id)}>
        <h1>{room.roomId}_{room.roomName}</h1>
    </div>
  )
}

export default RoomListItem