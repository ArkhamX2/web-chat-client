import React from 'react'

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
                <h1 key={index}>{room.userId}{room.userName}</h1>
            )}
        </div>
    )
}

export default ChatRoomList
