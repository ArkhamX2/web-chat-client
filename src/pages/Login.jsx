import React, { useContext,useState } from 'react'
import { AuthContext } from '../context'
import axiosConfig from '../API/axiosConfig'
import { Link } from 'react-router-dom';

const Login = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);

    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth','true')
    }

    const [loginInfo, setLoginInfo] = useState(() => {
      return{
          username: "",
          password: "",
      }
  })

  const changeInputLogin = event => {
      event.persist()
      setLoginInfo(prev => {
          return{
              ...prev,
              [event.target.name]: event.target.value,
          }
      })
  }

  const submitCheck = event =>{
      event.preventDefault();

      //Пост запрос c данными, введёнными пользователем
      axiosConfig.post("/security/login/",{
            username: loginInfo.username,
            password: loginInfo.password,
      }).then(res =>{     //Обработка ответа от сервера
            if(res.data === true){
                login();
                window.location.href = "/rooms"    //Переход на страницу после регистрации/ входа
            } 
            else{ 
                alert("Уже существует пользователь с такой почтой")
            }
      }).catch (()=>{
            alert("Ошибка на сервере")
      })
  }

  return (
    <div className="form">
        <h2>Login user:</h2>
        <form onSubmit={submitCheck}>
            <p>Name: 
                <input 
                    type="username"
                    id="username"
                    name="username"
                    value={loginInfo.username}
                    onChange={changeInputLogin}/>
            </p>
            <p>Password: 
                <input 
                    type="password"
                    id="password"
                    name="password"
                    value={loginInfo.password}
                    onChange={changeInputLogin} />
            </p>
            <input type="submit"/>
        </form>

      <Link to="/register">Зарегистрироваться</Link>
    </div>

  )
}

export default Login
