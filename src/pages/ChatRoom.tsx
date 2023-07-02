import { useEffect } from "react"
import MolchatLoader from "../components/UI/Loader/MolchatLoader"
import { useActions } from "../hooks/useActions"
import { useTypedSelector } from "../hooks/useTypedSelector"
import ChatMessage from "../components/UI/Message/ChatMessage"
import ChatMessageInput from "../components/UI/Input/ChatMessageInput"

const ChatRoom = () => {

  const { fetchChatMessages, sendChatMessage } = useActions()
  const { authUser } = useTypedSelector(state => state.auth)
  const { roomId } = useTypedSelector(state => state.room)
  const { messages, isChatMessageListLoading, chatMessageListError } = useTypedSelector(state => state.chatMessageList)

  useEffect(()=>{
    fetchChatMessages(roomId);
  },[])

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
            <ChatMessage message={message} user={authUser} />
        ))}
      </div>

      <ChatMessageInput send={sendChatMessage} sender={authUser} />

    </div>
  )
}

export default ChatRoom