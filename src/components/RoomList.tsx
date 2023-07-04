import RoomListItem from './RoomListItem'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'
import MolchatLoader from './UI/Loader/MolchatLoader'
import MolchatButton from './UI/button/MolchatButton'
import { useEffect } from 'react'


const RoomList = () => {

    const { roomListIsLoading, rooms, roomListError } = useTypedSelector(state => state.roomList)
    const { createRoom, deleteRoom,fetchRooms } = useActions()

    useEffect(()=>{
        fetchRooms()
    },[])

    if (roomListIsLoading) {
        return (
            <MolchatLoader />
        )
    }

    if (roomListError) {
        return (
            <h1>{roomListError}</h1>
        )
    }

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <MolchatButton onClick={() => deleteRoom('test')}>
                    <p>Удалить чат</p>
                </MolchatButton>
                <MolchatButton onClick={() => createRoom('test', [{id:'0',isUserLoading: false,userError:'',username:'123'}] )}>
                    <p>Создать чат</p>
                </MolchatButton>
            </div>
            {rooms.map((room) => (
                <RoomListItem key={room.roomId} room={room} />
            ))}
        </div>
    )
}

export default RoomList