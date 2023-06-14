import React, { useState,useEffect } from 'react'
import { useFetching } from '../hooks/useFetching';
import {useSortedRooms, useRooms} from '../hooks/useRooms';
import { getPageCount } from '../utils/pages';
import ChatRoomList from '../components/ChatRoomList';
import RoomsService from '../API/RoomsService';
import axios from 'axios';

const Home = () => {

    const [rooms,setRooms] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [totalPages,setTotalPages] = useState(0) //Number of pages with rooms
    const [limit, setLimit] = useState(10) //Limit of rendering rooms in one moment
    const [page,setPage] = useState(1) //Current page of rooms
    const[remove,setRemove] = useState('');

    async function fetchRooms(){
      const responce = await axios.get('https://jsonplaceholder.typicode.com/todos')
      setRooms(responce.data)
    }

    return (
      <div>
        <button onClick={fetchRooms}>GET ROOMS</button>
        <ChatRoomList rooms={rooms} remove = {remove} title={'ЧАТЫ'}/>
      </div>
    )
}

export default Home
