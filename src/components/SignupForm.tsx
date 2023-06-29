import { useState } from 'react'
import './UI/button/ButtonStyle.css';
import MolchatButton from './UI/button/MolchatButton';
import { useActions } from '../hooks/useActions';
import MolchatInput from './UI/Input/MolchatInput';

const SignupForm = () => {
    //const { isLoggedIn, isLoading, user, error } = useTypedSelector(state => state.auth)

    const { signup, setMessage, clearMessage } = useActions();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordRepeat, setPasswordRepeat] = useState<string>('');

    return (
        <main id='app-container'>
            <section id='page'>
                <div className='container'>
                    <div className='container__wrapper'>
                        <h1 className='container__title'>Регистрация</h1>

                        <MolchatInput onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            inputType='text'
                            placeholder='Введите email'
                        />
                        <MolchatInput onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            inputType='password'
                            placeholder='Введите пароль'
                        />
                        <MolchatInput onChange={(e) => setPasswordRepeat(e.target.value)}
                            value={passwordRepeat}
                            inputType='password'
                            placeholder='Повторите пароль'
                        />

                        <MolchatButton onClick={() => {
                            signup(email, password)
                            setMessage('Регистрация прошла успешно')
                            setTimeout(() => clearMessage(), 2000)
                            window.location.replace('/')
                        }} >
                            <p>Зарегистрироваться</p>
                        </MolchatButton>

                    </div>
                </div>
            </section>
        </main>


    )
}

export default SignupForm