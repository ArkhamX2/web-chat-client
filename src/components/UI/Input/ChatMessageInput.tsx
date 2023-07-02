import {FC, useState} from 'react'
import MolchatInput from './MolchatInput'
import { ChatMessageStatus, IChatMessage } from '../../../models/IChatMessage'
import { IUser } from '../../../models/IUser'

interface ChatMessageInputProps{
    send: (message: IChatMessage)=>any,
    sender: IUser,
}

const ChatMessageInput: FC<ChatMessageInputProps> = ({send,sender}) => {

    

    const [userMessageText,setUserMessageText] = useState<string>('')

    const userMessage= {
        chatMessageSender: sender,
        chatMessageStatus: ChatMessageStatus.SEND,
        chatMessageText: userMessageText, 
        chatMessageTimestamp: ''
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
            <MolchatInput inputType="text" onChange={(e) => setUserMessageText(e.target.value)} value={userMessageText} placeholder="Отправьте сообщение" />
            <button onClick={() => send(userMessage)}>Отправить сообщение</button>
        </div>
    )
}

export default ChatMessageInput