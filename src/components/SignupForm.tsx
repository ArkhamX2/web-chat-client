import {useState} from 'react'
import './UI/button/ButtonStyle.css';
import MolchatButton from './UI/button/MolchatButton';

const SignupForm = () => {
  //const { isLoggedIn, isLoading, user, error } = useTypedSelector(state => state.auth)
  

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
                      <div className='input-container'>
                          <input className='input__input'
                              onChange={(e) => setPassword(e.target.value)}
                              value={password}
                              type='password'
                              placeholder='Repeat password' />
                      </div>

                      <MolchatButton onClick={() => console.log('ЗАРЕГАЛ')
                      } >
                          <p>Зарегистрироваться</p>
                      </MolchatButton>

                  </div>
              </div>
          </section>
      </main>


  )
}

export default SignupForm