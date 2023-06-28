import { FC, useState } from 'react'
import { useActions } from '../hooks/useActions'
import './UI/button/ButtonStyle.css';


const LoginForm: FC = () => {

    //const { isLoggedIn, isLoading, user, error } = useTypedSelector(state => state.auth)
    const { login, signup, logout } = useActions()

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <main id='app-container'>
            <section id='page'>
                <div className='container'>
                    <div className='container__wrapper'>
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

                        <button className='btn btn-orange' onClick={() => login(email, password)}>
                            Войти
                        </button>

                        <button className='btn' onClick={() => signup(email, password)} >
                            Зарегистрироваться
                        </button>

                        <button className='btn' onClick={() => logout()}>
                            Выйти
                        </button>
                    </div>
                </div>
            </section>
        </main>


    )
}

export default LoginForm