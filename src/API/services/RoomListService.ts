import {AxiosResponse} from 'axios'
import $api from '../index'
import { RoomsResponse } from '../../models/response/RoomsResponse'
import { IUser } from '../../models/IUser'


export default class RoomListService{

    static createRoom(name: string,members:IUser[]): Promise<AxiosResponse<RoomsResponse>>{
        return $api.post<RoomsResponse>('/createRoom', {name, members})
    }

    static deleteRoom(id: string): Promise<AxiosResponse<RoomsResponse>>{
        return $api.post<RoomsResponse>('/deleteRoom', {id})
    }

    static fetchRooms(): Promise<AxiosResponse<IUser[]>>{
        return $api.get<IUser[]>('/users')
    }

}