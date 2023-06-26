import { FC, useState } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';


const LoginForm: FC = () => {

    //const { isLoggedIn, isLoading, user, error } = useTypedSelector(state => state.auth)
    const { login, signup, logout } = useActions()

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <div>
            <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type='text'
                placeholder='Email' />

            <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type='password'
                placeholder='Password' />

            <button onClick={() => login(email, password)}>
                Войти
            </button>

            <button onClick={() => signup(email, password)} >
                Зарегистрироваться
            </button>
        </div>
    )
}

export default LoginForm