import { FC } from 'react'
import { IUser } from '../models/IUser'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'

interface RoomListItemProps{
    user: IUser
}

const RoomListItem: FC<RoomListItemProps> = ({user}) => {

  const {setActiveContact,setRoom} = useActions()

  const {activeContactUser} = useTypedSelector(state => state.activeContact)

  return (
    <div onClick={() => {setActiveContact(user);
      setRoom({roomId: user.id,sender: user, recipient: activeContactUser,roomName: user.username, roomError: ''});
    console.log(activeContactUser);
    }}>
        <h1>{user.id}_{user.username}</h1>
    </div>
  )
}

export default RoomListItem