import React from 'react'
import { useState } from 'react'
import MyButton from '../components/UI/MyButton'
import ChatRoom from '../components/ChatRoom'
import SignIn from './SignIn'
import Home from './Home'

const Container = () => {

  //Создаём пустого юзера по умолчанию. Проверяем авторизован ли он.

  const [user,setUser] = useState({ isAuth: true}); 

  return (
    <div>
        <h1>ArkhamChat</h1>
        {user.isAuth ? <Home/> : <SignIn/>}
    </div>
  )
}

export default Container
