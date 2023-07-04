import { useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import MolchatLoader from './UI/Loader/MolchatLoader'
import ChatMessage from './UI/Message/ChatMessage'
import ChatMessageInput from './UI/Input/ChatMessageInput'
import { IChatMessage } from '../models/IChatMessage'
import { API_URL } from '../API'

var stompClient: any = null;

const Chat = () => {

    const { authUser } = useTypedSelector(state => state.auth)
    const { activeContactUser } = useTypedSelector(state => state.activeContact)

    const { fetchChatMessages, sendChatMessage, setMessage } = useActions()
    const { sender, recipient } = useTypedSelector(state => state.room)
    const { messages, isChatMessageListLoading, chatMessageListError } = useTypedSelector(state => state.chatMessageList)

    useEffect(() => {
        connect();
    }, []);

    useEffect(() => {
        fetchChatMessages(sender.id, recipient.id);
    }, [])

    if (chatMessageListError) {
        return <h1>{chatMessageListError}</h1>
    }

    if (isChatMessageListLoading) {
        return <MolchatLoader />
    }

    const connect = () => {
        const Stomp = require("stompjs");
        var SockJS = require("sockjs-client");
        SockJS = new SockJS(API_URL+"/ws");
        stompClient = Stomp.over(SockJS);
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