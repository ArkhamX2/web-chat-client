import Rooms from "../pages/Rooms"
import ChatRoom from "../pages/ChatRoom"
import Profile from "../pages/Profile"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import PasswordReset from "../pages/PasswordReset"

export const privateRoutes = [
    {path: '/rooms', element: Rooms },
    {path: '/chat-room', element: ChatRoom},
    {path: '/profile', element: Profile},
]

export const publicRoutes = [
    {path: '/login', element: Login},
    {path: '/signup', element: Signup},
    {path: '/password-reset', element: PasswordReset},
]