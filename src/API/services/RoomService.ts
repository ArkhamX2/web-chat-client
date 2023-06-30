import {AxiosResponse} from 'axios'
import $api from '../index'
import { IRoom } from '../../models/IRoom'
import { IUser } from '../../models/IUser'


export default class RoomService{

    static changeRoomName(name: string): Promise<AxiosResponse<IRoom>>{
        return $api.post<IRoom>('/changeRoomName', {name})
    }
    
    static addUser(user: IUser): Promise<AxiosResponse<IRoom>>{
        return $api.post<IRoom>('/addUser', {user})
    }
    
    static deleteUser(user: IUser): Promise<AxiosResponse<IRoom>>{
        return $api.post<IRoom>('/deleteUser', {user})
    }

}


