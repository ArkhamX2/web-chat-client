import React from 'react'

const ChatMessage = ({text,userId}) => {
  return (
    <div>
        <h3>{userId}</h3>
        <p>{text}</p>
    </div>
  )
}

export default ChatMessage
