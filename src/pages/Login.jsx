import React, { useContext } from 'react'
import { AuthContext } from '../context'
import { Link } from 'react-router-dom';

const Login = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);

    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth','true')
    }

  return (
    <div>
      <h1>Страница для логина</h1>
      <form onSubmit={login}>
        <input type="text" placeholder='Введите логин'/>
        <input type="password" placeholder='Введите пароль'/> 
        <button>Войти</button>
      </form>

      <Link to="/register">Зарегистрироваться</Link>

    </div>
  )
}

export default Login
