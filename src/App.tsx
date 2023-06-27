import LoginForm from "./components/LoginForm"
import { useEffect } from 'react'
import { useActions } from "./hooks/useActions"
import { useTypedSelector } from "./hooks/useTypedSelector"

function App() {

  const { isLoggedIn, user } = useTypedSelector(state => state.auth)
  const { checkAuth, logout } = useActions()

  useEffect(() => {
    if (localStorage.getItem('token')) {
      checkAuth();
    }
  }, [])

  if(!isLoggedIn){
    return(
      <LoginForm/>
    )
  }

  return (
    <div>
      <div>
          <h1>{isLoggedIn ? `Авторизован ${user?.email} ${user?.id} ${user?.isActivated}` : "Зарегистрироваться надо"}</h1>
          <button onClick={()=> logout()}>Выйти</button>
        </div>
    </div>
  )
}

export default App