import React, { useEffect, useState } from 'react'
import { useFetcher, useParams } from 'react-router-dom'
import { useFetching } from '../hooks/useFetching';
import RoomsService from '../API/RoomsService';

const ChatRoomIdPage = (props) => {

    const params = useParams();
    const [room,setRoom] = useState({id:0, userName:'BOB'});
    const [messages,setMessages] = useState([{id:0,body:"Hello World!"},{id:1,body:"Hello World! AGAIN"}]);

    const [fetchRoomById,isLoading, error] = useFetching(async (id) =>{
        const responce = await RoomsService.getById(id);
        setRoom(responce.data);
    })
    
    const [fetchMessagesById,isMessagesLoading, messagesError] = useFetching(async (id) =>{
        const responce = await RoomsService.getById(id);
        setMessages(responce.data);
    })


    useEffect(()=>{
        fetchRoomById(params.id);
        fetchMessagesById(params.id);
    },[])

    //Кнопка назад

  return (
    <div>
      <strong>{room.id}. {room.userName}</strong>
      <p>--------------------</p>
      <div>
        {messages.map(message =>
            <div key = {message.id} style={{marginTop: 15}}>
                <div>{message.body}</div>
            </div>
            )}
      </div>
    </div>
  )
}

export default ChatRoomIdPage
