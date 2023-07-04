import {AxiosResponse} from 'axios'
import $api from '../index'
import { UserResponse } from '../../models/response/usersResponce'


export default class UserService{
    static fetchUser(id: string): Promise<AxiosResponse<UserResponse>>{       
        return $api.get<UserResponse>(`/user/${id}`)
    }

    static changeUsername(newUsername:string): Promise<AxiosResponse<UserResponse>>{       
        return $api.post<UserResponse>('/user/change-username', {newUsername})
    }

    static changePassword(newPassword:string): Promise<AxiosResponse<UserResponse>>{       
        return $api.post<UserResponse>('/user/change-password', {newPassword})
    }
}