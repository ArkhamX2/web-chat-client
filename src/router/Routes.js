import Profile from "../pages/Profile";
import Rooms from "../pages/Rooms";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ChatRoomIdPage from "../pages/ChatRoomIdPage";

export const privateRoutes = [
    {path:'/profile', Element: Profile},
    {path:'/rooms', Element: Rooms},
    {path:'/rooms/:id', Element: ChatRoomIdPage},
];

export const publicRoutes = [
    {path:'/login', Element: Login},
    {path:'/register', Element: Register},
];