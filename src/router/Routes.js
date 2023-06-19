import ChatRoom from "../components/ChatRoom";
import Profile from "../pages/Profile";
import Rooms from "../pages/Rooms";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const privateRoutes = [
    {path:'/profile', Element: Profile},
    {path:'/rooms', Element: Rooms},
    {path:'/rooms/:id', Element: ChatRoom},
];

export const publicRoutes = [
    {path:'/login', Element: Login},
    {path:'/register', Element: Register},
];