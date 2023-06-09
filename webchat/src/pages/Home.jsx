import React, { useState,useEffect } from 'react'
import { useFetching } from '../hooks/useFetching';
import {useSortedRooms} from '../hooks/useRooms';
import { getPageCount } from '../utils/pages';
import ChatRoomList from '../components/ChatRoomList';
import RoomsService from '../API/RoomsService';

const Home = () => {

    const [rooms,setRooms] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [totalPages,setTotalPages] = useState(0) //Number of pages with rooms
    const [limit, setLimit] = useState(10) //Limit of rendering rooms in one moment
    const [page,setPage] = useState(1) //Current page of rooms

    //Sort rooms when rooms array has changed
    const sortedAndSearchedRooms = useSortedRooms(rooms,filter.sort, filter.query)

    //fetch rooms
    const [fetchRooms, isRoomsLoading, roomError] = useFetching( async(limit,page) =>{
      const responce = await RoomsService.getAll(limit,page);
      setRooms(responce.data);
      const totalCount = responce.headers['x-total-count'];
      setTotalPages(getPageCount(totalCount,limit));
    })

    //fetch rooms once - get a query to server
    useEffect(()=>{
      fetchRooms(limit,page);
    },[])

    return (
      <div>
        {roomError &&
          <h1>Ошибка: ${roomError}</h1>
        }

        {isRoomsLoading
          ? <h1>Loading...</h1>
          : <ChatRoomList />
        }

      </div>
    )
}

export default Home
