import { useMemo } from "react";

//Returns sorted room array in alphabetical order
export const useSortedRooms = (rooms,sort) =>{
    const sortedRooms = useMemo(()=>{
        if(sort){
            return [...rooms].sort((a,b) => a[sort].localeCompare(b[sort]))
        }
        return rooms
    }, [sort, rooms])
}