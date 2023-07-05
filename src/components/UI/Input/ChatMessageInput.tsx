import { FC, useState } from 'react'
import MolchatInput from './MolchatInput'
import { ChatMessageStatus, IChatMessage } from '../../../models/IChatMessage'
import { IUser } from '../../../models/IUser'
import { CHAT_API_URL } from '../../../API'

interface ChatMessageInputProps {
    send: (message: IChatMessage) => any,
    sender: IUser,
    recipient: IUser,
    stompClient: any,
}

const ChatMessageInput: FC<ChatMessageInputProps> = ({send,sender,recipient,stompClient}) => {


    const userMessage: IChatMessage= {
        chatMessageSender: sender,
        chatMessageRecipient: recipient,
        chatMessageStatus: ChatMessageStatus.SEND,
        chatMessageText: userMessageText,
        chatMessageTimestamp: new Date(),
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