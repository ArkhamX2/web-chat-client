import {AxiosResponse} from 'axios'
import $api from '../index'
import { UserResponse } from '../../models/response/usersResponce'
import { IUser } from '../../models/IUser'


export default class UserService{

    static fetchUsers(): Promise<AxiosResponse<IUser[]>>{       
        return $api.get<IUser[]>(`/users`)
    }

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