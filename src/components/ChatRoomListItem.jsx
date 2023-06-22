import React from 'react'

const ChatRoomListItem = (props) => {
  return (
    <div onClick={()=>{window.location.href = `/rooms/${props.room.id}`}}>
      <h1>{props.number}|{props.room.userName}</h1>
    </div>
  )
}

export default ChatRoomListItem
