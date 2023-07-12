import { useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
//import MolchatLoader from './UI/Loader/MolchatLoader'
import ChatMessage from './UI/Message/ChatMessage'
import ChatMessageInput from './UI/Input/ChatMessageInput'
import { IChatMessage } from '../models/IChatMessage'
import {CHAT_API_URL } from '../API'
import Stomp from 'stompjs'
import SockJS from 'sockjs-client'

var stompClient: any = null;

const Chat = () => {

   const { authUser } = useTypedSelector(state => state.auth)
   const { activeContactUser } = useTypedSelector(state => state.activeContact)

    const { fetchChatMessages, setMessage, sendChatMessage } = useActions()
    const { sender, recipient, } = useTypedSelector(state => state.room)
    const { messages } = useTypedSelector(state => state.chatMessageList)

    useEffect(() => {
        connect();
    }, []);

    useEffect(() => {
        console.log(sender,recipient);
        fetchChatMessages(sender.id, recipient.id);
        
        console.log(messages);
        
    }, [])

    // if (chatMessageListError) {
    //     return <h1>{chatMessageListError}</h1>
    // }

    // if (isChatMessageListLoading) {
    //     return <MolchatLoader />
    // }

    const connect = () => {
        const sockinstance = new SockJS(CHAT_API_URL+"/ws");
        stompClient = Stomp.over(sockinstance);
        stompClient.connect({}, onConnected, onError);
    };

    const onConnected = () => {
        console.log("connected");
        console.log(authUser);
        stompClient.subscribe(
            "/user/" + authUser.id + "/queue/messages",
            onMessageReceived
        );
    };

    const onError = (err: any) => {
        console.log(err);
    };

    const onMessageReceived = (message: IChatMessage) => {
        if (activeContactUser.id === message.chatMessageSender.id) {
            fetchChatMessages(authUser.id, activeContactUser.id);
        } else {
            setMessage("Получено новое сообщение от" + message.chatMessageSender);
        }
    };


    return (
        <div>
             <div>
                {messages.map((message) => (
                    <ChatMessage message={message} user={authUser} />
                ))}
            </div>

            <ChatMessageInput send={() =>{sendChatMessage}} sender={authUser} recipient={activeContactUser} stompClient={stompClient} />


        </div>
    )
}

export default Chat