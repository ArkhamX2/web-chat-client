import React from 'react'
import ChatRoomListItem from './ChatRoomListItem'

const ChatRoomList = ({rooms, remove, title }) => {


    if(!rooms){
        return(
            <h1>Начни чат какой-нибудь</h1>
        )
    }

    return (
        <div>
            <h1>{title}</h1>
            {rooms.map((room,index) => 
                <ChatRoomListItem room = {room} number={index+1} />
            )}
        </div>
    )
}

export default ChatRoomList
