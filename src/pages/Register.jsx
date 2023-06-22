import React, { useState } from 'react'
import axiosConfig from '../API/axiosConfig'
import axios from 'axios'
import validator from 'validator'

const Register = () => {

    const [register, setRegister] = useState(() => {
        return{
            username: "",
            email: "",
            password: "",
            password2: "",
        }
    })

    const changeInputRegister = event => {
        event.persist()
        setRegister(prev => {
            return{
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }

    const submitCheck = event =>{
        event.preventDefault();
        if(!validator.isEmail(register.email)){
            alert("Неправильно введён email")
        }
        else if(register.password !== register.password2){
            alert("Пароли не совпадают")
        }
        else if(!validator.isStrongPassword(register.password, {minSymbols: 0})){
            alert("пароль должен содержать хотя бы одну заглавную, строчную букву, цифру и состоять не менее чем из 8 символов")
        }
        else{

            // //Пост запрос c данными, введёнными пользователем
            // axios.post("http://localhost:8888/web-chat-0.0.4-SNAPSHOT/security/register",{
            //      username: register.username,
            //      password: register.password,
            //      administration_flag: false,
            // }).then(res =>{     //Обработка ответа от сервера
            //      if(res.data === true){
            //          window.location.href = "/login"    //Переход на страницу после регистрации/ входа
            //      } 
            //      else{ 
            //          alert("Уже существует пользователь с такой почтой")
            //      }
            // }).catch (()=>{
            //      alert("Ошибка на сервере")
            // })


            const responce = axios.get("/security/register")
            console.log(responce.data);
        }
    }


  return (
    <div className="form">
        <h2>Register user:</h2>
        <form onSubmit={submitCheck}>
            <p>Name: 
                <input 
                    type="username"
                    id="username"
                    name="username"
                    value={register.username}
                    onChange={changeInputRegister}/>
            </p>
            <p>Email: 
                <input 
                    type="email"
                    id="email"
                    name="email"
                    value={register.email}
                    onChange={changeInputRegister}
                    formNoValidate />
            </p>
            <p>Password: 
                <input 
                    type="password"
                    id="password"
                    name="password"
                    value={register.password}
                    onChange={changeInputRegister} />
            </p>
            <p>Repeat password: 
                <input 
                    type="password"
                    id="password2"
                    name="password2"
                    value={register.password2}
                    onChange={changeInputRegister} />
            </p>
            <input type="submit"/>
        </form>
    </div>
  )
}

export default Register
