import {AxiosResponse} from 'axios'
import $api from '../index'
import { UserResponse } from '../../models/response/usersResponce'

export default class UserService{
    static fetchUser(): Promise<AxiosResponse<UserResponse>>{       
        return $api.get<UserResponse>('/user/me')
    }

    static changeUsername(newUsername:string): Promise<AxiosResponse<UserResponse>>{       
        return $api.post<UserResponse>('/user/change-username', {newUsername})
    }

    static changePassword(newPassword:string): Promise<AxiosResponse<UserResponse>>{       
        return $api.post<UserResponse>('/user/change-password', {newPassword})
    }
}