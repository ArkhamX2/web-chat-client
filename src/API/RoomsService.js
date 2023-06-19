import axios from "axios";

export default class PostService{

    static async getAll(limit = 10, page=1){
        const responce = await axios.get("localhost:8888/web-chat-0.0.4-SNAPSHOT/security/register",{
            params:{
                _limit: limit,
                _page: page
            }
        })
        return responce;
    }

}