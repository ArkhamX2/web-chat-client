import { FC } from 'react'
import {  IChatMessage } from '../../../models/IChatMessage'
import { IUser } from '../../../models/IUser'
import classes from './ChatMessage.module.css'

interface ChatMessageProps {
    message: IChatMessage,
    user: IUser|null
}

const ChatMessage: FC<ChatMessageProps> = ({ message, user }) => {
    return (
        <div className=
            {
                message.chatMessageSender.id === user?.id
                    ? classes.myMessage
                    : classes.othersMessage
            }>

            {/* <div>
                <img src="" alt="" className='sender pic' />
            </div> */}
            <h3 style={{ textDecoration: 'underline' }}>{message.chatMessageSender.username}</h3>
            <div>
                <p>{message.chatMessageText}</p>
                {/* Див для индикаторов прочтения и времени отправки */}
                {/*<div> 
                     <img
                        src={message.chatMessageStatus === ChatMessageStatus.SEND
                            ? '1 mark(galochka)'
                            : '2 marks(galochka)'
                        } alt="" /> 
                    <p>{message.chatMessageTimestamp.toString()}</p>
                </div>*/}
            </div>
        </div>
    )
}

export default ChatMessage