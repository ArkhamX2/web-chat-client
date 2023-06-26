import {AxiosResponse} from 'axios'
import $api from '../index'
import { AuthResponse } from '../../models/response/AuthResponse'


export default class AuthService{
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>>{
        return $api.post<AuthResponse>('/security/login', {email, password})
    }

    static async signup(email: string, password: string): Promise<AxiosResponse<AuthResponse>>{
        return $api.post<AuthResponse>('/security/register', {email, password})
    }

    static async logout(): Promise<void>{
        return $api.post('/security/logout')
    }
}