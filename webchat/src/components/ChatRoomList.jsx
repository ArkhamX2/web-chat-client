import React from 'react'

const ChatRoomList = ({rooms, remove, title }) => {

    console.log(rooms);

    if(!rooms.length){
        return(
            <h1>Начни чат какой-нибудь</h1>
        )
    }

    return (
        <div>
            <h1>{title}</h1>
            {rooms.map((room,index) => 
                <h1 key={room}>{}{room.userId}{room.title}</h1>
            )}
        </div>
    )
}

export default ChatRoomList
