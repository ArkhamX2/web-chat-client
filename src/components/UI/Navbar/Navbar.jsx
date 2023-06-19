import { Link } from "react-router-dom";

import React, { useContext } from 'react'
import { AuthContext } from "../../../context";

const Navbar = () => {
    const {isAuth,setIsAuth} = useContext(AuthContext);
    
    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    return (
        <div className="navbar">
            <button onClick={logout}>Выйти</button>
        <div className="navbar__links">
            <Link to="/rooms">Все чаты</Link>
            <Link to="/profile">Профиль</Link>
        </div>
        </div>
    )
}

export default Navbar;
