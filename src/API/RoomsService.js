import axiosConfig from '../API/axiosConfig'

export default class RoomsService{

    static async getAll(limit = 10, page=1){
        const responce = await axiosConfig.get("/security/rooms",{
            params:{
                _limit: limit,
                _page: page
            }
        })
        return responce;
    }

    static async getById(id){
        const responce = await axiosConfig.get("/security/rooms/" + id);
        return responce;
    }

    static async getMessagesById(id){
        const responce = await axiosConfig.get(`/security/rooms/${id}/messages`);
        return responce;
    }

}