import { useEffect, useState } from "react"
import MolchatLoader from "../components/UI/Loader/MolchatLoader"
import { useActions } from "../hooks/useActions"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { ChatMessageStatus } from "../models/IChatMessage"
import MolchatInput from "../components/UI/Input/MolchatInput"

const ChatRoom = () => {

  const { fetchChatMessages, sendChatMessage } = useActions()
  const { authUser } = useTypedSelector(state => state.auth)
  const { roomId } = useTypedSelector(state => state.room)
  const { messages, isChatMessageListLoading, chatMessageListError } = useTypedSelector(state => state.chatMessageList)

  const [userMessage, setUserMessage] = useState<string>('')

  // useEffect(()=>{
  //   fetchChatMessages(roomId);
  // },[])

  if (chatMessageListError) {
    return <h1>{chatMessageListError}</h1>
  }

  if (isChatMessageListLoading) {
    return <MolchatLoader />
  }

  return (
    <div>
      <div>
        {messages.map((message) => (
          <div style=
            {
              message.chatMessageSender.username === authUser?.username
                ? {margin:'5px', padding:'5px', border: '3px solid black', borderRadius:'10px'} /*Для себя прибить вправо*/
                : {margin:'5px', padding:'5px', border: '3px solid gray', borderRadius:'10px'} /*Для не себя влево*/
            }>

            <h3 style={{textDecoration:'underline'}}>{message.chatMessageSender.username}</h3>
            <p>{message.chatMessageText}|{message.chatMessageStatus}</p>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
        <MolchatInput inputType="text" onChange={(e) => setUserMessage(e.target.value)} value={userMessage} placeholder="Отправьте сообщение" />
        <button onClick={() => sendChatMessage({ chatMessageSender: { username: "BOB" }, chatMessageStatus: ChatMessageStatus.SEND, chatMessageText: userMessage })}>Отправить сообщение</button>
      </div>

    </div>
  )
}

export default ChatRoom