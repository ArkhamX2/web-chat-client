import { useMemo } from "react";

//Returns sorted room array in alphabetical order
export const useSortedRooms = (rooms,sort) =>{
    const sortedRooms = useMemo(()=>{
        console.log("useSortedRooms отработал");
        if(sort){
            return rooms;
        }
        return rooms
    }, [sort, rooms])
}

export const useRooms = (rooms,sort,query) => {
    const sortedRooms = useSortedRooms(rooms,sort);

    const sortedAndSearchedRooms = useMemo(() => {
        return sortedRooms.filter(room => room.title.toLowerCase().includes(query.toLowerCase()))
      }, [query,sortedRooms])
    
      return sortedAndSearchedRooms;

}