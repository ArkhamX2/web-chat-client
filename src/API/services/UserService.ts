import {AxiosResponse} from 'axios'
import $api from '../index'
import { IUser } from '../../models/IUser'


export default class UserService{
    static fetchUsers(): Promise<AxiosResponse<IUser[]>>{
        console.log(localStorage.getItem('token'));
        
        return $api.get<IUser[]>('/user/all')
    }

}