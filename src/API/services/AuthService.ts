import {AxiosResponse} from 'axios'
import $api from '../index'
import { AuthResponse } from '../../models/response/AuthResponse'


export default class AuthService{
    static async login(name: string, password: string): Promise<AxiosResponse<AuthResponse>>{
        return $api.post<AuthResponse>('/security/login', {name, password})
    }

    static async signup(name: string, password: string): Promise<AxiosResponse<AuthResponse>>{
        return $api.post<AuthResponse>('/security/register', {name, password})
    }

}