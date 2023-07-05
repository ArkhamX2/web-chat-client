import RoomListItem from './RoomListItem'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'
import MolchatLoader from './UI/Loader/MolchatLoader'
import { useEffect } from 'react'


const RoomList = () => {

    const { roomListIsLoading, users, roomListError } = useTypedSelector(state => state.roomList)
    const { fetchRooms } = useActions()

    // useEffect(()=>{
    //     fetchRooms()
    // },[])

    // if (roomListIsLoading) {
    //     return (
    //         <MolchatLoader />
    //     )
    // }

    // if (roomListError) {
    //     return (
    //         <h1>{roomListError}</h1>
    //     )
    // }

    return (
        <div>
            {users.map((user) => (
                <RoomListItem key={user.id} user={user} />
            ))}
        </div>
    )
}

export default RoomList