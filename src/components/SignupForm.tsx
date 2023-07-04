import { useState } from 'react'
import './UI/button/ButtonStyle.css';
import MolchatButton from './UI/button/MolchatButton';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import MolchatInput from './UI/Input/MolchatInput';
import MolchatForm from './UI/Form/MolchatForm';
import MolchatLoader from './UI/Loader/MolchatLoader';

const SignupForm = () => {

    //const {isAuthLoading, authError } = useTypedSelector(state => state.auth)
    const { signup, setMessage, clearMessage } = useActions();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordRepeat, setPasswordRepeat] = useState<string>('');

    // if(isAuthLoading){
    //     return(
    //         <MolchatLoader/>
    //     )
    // }

    // if(authError){
    //     return(
    //         <h1>{authError}</h1>
    //     )
    // }

    return (
        <MolchatForm>
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
        </MolchatForm>



    )
}

export default SignupForm