import { FC, useState } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector';
import './UI/button/ButtonStyle.css';
import MolchatButton from './UI/button/MolchatButton';
import { Link } from 'react-router-dom';
import { COLORS } from '../constants/styled-components/colors';
import MolchatInput from './UI/Input/MolchatInput';
import MolchatForm from './UI/Form/MolchatForm';
import MolchatLoader from './UI/Loader/MolchatLoader';


const LoginForm: FC = () => {

    const {isAuthLoading, authError } = useTypedSelector(state => state.auth)

    const { login, setMessage} = useActions()

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    if(isAuthLoading){
        return(
            <MolchatLoader/>
        )
    }

    if(authError){
        return(
            <h1>{authError}</h1>
        )
    }

    return (
        <MolchatForm>
            <h2 className='container__title'>Авторизация</h2>

            <MolchatInput onChange={(e) => setEmail(e.target.value)}
                value={email}
                inputType='text'
                placeholder='Email' />

            <MolchatInput onChange={(e) => setPassword(e.target.value)}
                value={password}
                inputType='password'
                placeholder='Password' />

            <MolchatButton onClick={() => {
                login(email, password)
                setMessage('Авторизация прошла успешно')
                //setTimeout(() => clearMessage(), 2000)
            }}>
                <p>Войти</p>
            </MolchatButton>
            <div>
                <Link style={{ display: 'inline-block', color: COLORS.main_text }} to={'/signup'}>Зарегистрироваться</Link>
                <Link style={{ display: 'inline-block', marginLeft:'10px' , color: COLORS.main_text }} to={'/password-reset'}>Восстановить пароль</Link>
            </div>
            

        </MolchatForm>


    )
}

export default LoginForm