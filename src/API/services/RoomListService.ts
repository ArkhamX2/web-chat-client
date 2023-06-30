import {AxiosResponse} from 'axios'
import $api from '../index'
import { RoomsResponse } from '../../models/response/RoomsResponse'


export default class RoomListService{

    static createRoom(name: string): Promise<AxiosResponse<RoomsResponse>>{
        return $api.post<RoomsResponse>('/createRoom', {name})
    }

    static deleteRoom(id: string): Promise<AxiosResponse<RoomsResponse>>{
        return $api.post<RoomsResponse>('/deleteRoom', {id})
    }

    static fetchRooms(): Promise<AxiosResponse<RoomsResponse>>{
        return $api.get<RoomsResponse>('/rooms')
    }

}