import {useState} from 'react'
import './UI/button/ButtonStyle.css';
import MolchatButton from './UI/button/MolchatButton';
import { useActions } from '../hooks/useActions';

const SignupForm = () => {
  //const { isLoggedIn, isLoading, user, error } = useTypedSelector(state => state.auth)
  
  const {signup,setMessage,clearMessage} = useActions();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
      <main id='app-container'>
          <section id='page'>
              <div className='container'>
                  <div className='container__wrapper'>
                      <h1 className='container__title'>Регистрация</h1>
                      <div className='input-container'>
                          <input className='input__input'
                              onChange={(e) => setEmail(e.target.value)}
                              value={email}
                              type='text'
                              placeholder='Введите email' />
                      </div>
                      <div className='input-container'>
                          <input className='input__input'
                              onChange={(e) => setPassword(e.target.value)}
                              value={password}
                              type='password'
                              placeholder='Введите пароль' />
                      </div>
                      <div className='input-container'>
                          <input className='input__input'
                              onChange={(e) => setPassword(e.target.value)}
                              value={password}
                              type='password'
                              placeholder='Повторите пароль' />
                      </div>

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