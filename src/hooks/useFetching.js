import { useState } from "react";

//Tracking the work of any callback
export const useFetching = (callback) =>{
    const [isLoading,setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async (...args) =>{
        try{
            setIsLoading(true);
            await callback(...args);
        } catch (e){
            setError(e.message);
        } finally{
            setIsLoading(false);
        }
    }


}