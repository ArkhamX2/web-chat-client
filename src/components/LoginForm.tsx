import { FC, useState } from 'react'
import { useActions } from '../hooks/useActions'
import './UI/button/ButtonStyle.css';
import MolchatButton from './UI/button/MolchatButton';
import { useTypedSelector } from '../hooks/useTypedSelector';


const LoginForm: FC = () => {

    //const { isLoggedIn, isLoading, user, error } = useTypedSelector(state => state.auth)
    const { login, signup, logout, setMessage} = useActions()
    const { text } = useTypedSelector(state => state.message)

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <main id='app-container'>
            <section id='page'>
                <div className='container'>
                    <div className='container__wrapper'>
                        <h1 className='container__title'>Авторизация</h1>
                        <div className='input-container'>
                            <input className='input__input'
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                type='text'
                                placeholder='Email' />
                        </div>
                        <div className='input-container'>
                            <input className='input__input'
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                type='password'
                                placeholder='Password' />
                        </div>

                        <MolchatButton onClick={() => {
                            login(email, password)
                            setMessage('Авторизация прошла успешно')
                            setTimeout(() => console.log(text)
                            ,2000)
                        }}>
                            <p>Войти</p>
                        </MolchatButton>

                        <MolchatButton onClick={() => {
                            signup(email, password)
                            setMessage('Регистрация прошла успешно')
                            setTimeout(() => console.log(text)
                            ,2000)
                        }} >
                            <p>Зарегистрироваться</p>
                        </MolchatButton>

                        <MolchatButton onClick={() => {
                            logout()
                            setMessage('Выход прошел успешно')
                            setTimeout(() => console.log(text)
                            ,2000)
                        }}>
                            <p>Выйти</p>
                        </MolchatButton>
                    </div>
                </div>
            </section>
        </main>


    )
}

export default LoginForm