import { FC } from 'react'
import { ChatMessageStatus, IChatMessage } from '../../../models/IChatMessage'
import { IUser } from '../../../models/IUser'
import classes from './ChatMessage.module.css'

interface ChatMessageProps {
    message: IChatMessage,
    user: IUser | null
}
{/* <div class="message">
    <div class="message__outer">
        <div class="message__avatar"></div>
        <div class="message__inner">
            <div class="message__bubble"></div>
            <div class="message__actions"></div>
            <div class="message__spacer"></div>
        </div>
        <div class="message__status"></div>
    </div>
</div> */}

const ChatMessage: FC<ChatMessageProps> = ({ message, user }) => {
    return (
        <div className='outer'>
            {/* inner*/}
            <div className='inner' style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div className=
                    {
                        message.chatMessageSender.id === user?.id
                            ? classes.myMessageBubble
                            : classes.othersMessageBubble
                    }>
                    <p>{message.chatMessageText}</p>
                </div>
                <div className='actions'></div>
                <div className='spacer'></div>
            </div>
            <div className='status'></div>

            <div>
                <img src="" alt="" className='sender pic' /><h3 style={{ textDecoration: 'underline' }}>{message.chatMessageSender.username}</h3>
            </div>
            <div>

                {/* Див для индикаторов прочтения и времени отправки */}
                <div>
                    <img
                        src={message.chatMessageStatus === ChatMessageStatus.SEND
                            ? '1 mark(galochka)'
                            : '2 marks(galochka)'
                        } alt="" />
                    <p>{message.chatMessageTimestamp}</p>
                </div>
            </div>
        </div>
    )
}

export default ChatMessage