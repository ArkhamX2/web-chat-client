import {AxiosResponse} from 'axios'
import $api from '../index'
import { IUser } from '../../models/IUser'


export default class UserService{
    static fetchUser(): Promise<AxiosResponse<IUser>>{       
        return $api.get<IUser>('/user/me')
    }

    static changeUsername(newUsername:string): Promise<AxiosResponse<IUser>>{       
        return $api.post<IUser>('/user/change-username', {newUsername})
    }

    static changePassword(newPassword:string): Promise<AxiosResponse<IUser>>{       
        return $api.post<IUser>('/user/change-password', {newPassword})
    }
}