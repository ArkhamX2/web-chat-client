
import {FC,useEffect} from 'react'
import LoginForm from '../components/LoginForm'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'


const Login = () => {

    const { isLoggedIn, user } = useTypedSelector(state => state.auth)
    const { checkAuth, logout } = useActions()

    useEffect(() => {
        if (localStorage.getItem('token')) {
            checkAuth();
        }
    }, [])

    if (!isLoggedIn) {
        return (
            <LoginForm />
        )
    }

    return (
        <div>
            <h1>{isLoggedIn ? `Авторизован ${user?.email} ${user?.id} ${user?.isActivated}` : "Зарегистрироваться надо"}</h1>
            <button onClick={() => logout()}>Выйти</button>
        </div>
    )
}

export default Login