import { FC, useState } from 'react'
import MolchatInput from './MolchatInput'
import { ChatMessageStatus, IChatMessage } from '../../../models/IChatMessage'
import { IUser } from '../../../models/IUser'
import MolchatButton from '../button/MolchatButton'
import classes from './ChatMessageInput.module.css'

interface ChatMessageInputProps {
    send: (message: IChatMessage) => any,
    sender: IUser,
}


const ChatMessageInput: FC<ChatMessageInputProps> = ({ send, sender }) => {



    const [userMessageText, setUserMessageText] = useState<string>('')

    const userMessage = {
        chatMessageSender: sender,
        chatMessageStatus: ChatMessageStatus.SEND,
        chatMessageText: userMessageText,
        chatMessageTimestamp: ''
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row', width:'100%'}}>
            <div style={{display:'flex', flex:'1'}}>
                <input
                    className={classes.ChatInput}
                    onChange={(e) => setUserMessageText(e.target.value)}
                    value={userMessageText}
                    placeholder={"Отправьте сообщение"}
                />
            </div>
            <MolchatButton onClick={() => send(userMessage)}>Отправить сообщение</MolchatButton>
        </div>
    )
}

export default ChatMessageInput