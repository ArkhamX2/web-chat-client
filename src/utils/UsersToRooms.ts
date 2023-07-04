import { IRoom } from "../models/IRoom";
import { IUser } from "../models/IUser";
import { initialUserState } from "../store/reducers/UserReducer";

export const usersToRooms = (users: IUser[]):IRoom[] =>{

    let rooms:IRoom[] = []; 

    for (let index = 0; index < users.length; index++) {
        const user = users[index];
        rooms.push({
            roomId:user.id,
            roomName:user.username,
            sender:initialUserState,
            recipient:user,
            roomError:'',
        })
    }

    return rooms;

}