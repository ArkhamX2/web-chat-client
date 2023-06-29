import React, { useState } from 'react'
import MolchatInput from './UI/Input/MolchatInput'
import MolchatButton from './UI/button/MolchatButton'
import { COLORS } from '../constants/styled-components/colors'
import { Link } from 'react-router-dom'

const PasswordResetForm = () => {

    const [email, setEmail] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const [newPasswordRepeat, setNewPasswordRepeat] = useState<string>('');

    return (
        <main id='app-container'>
            <section id='page'>
                <div className='container'>
                    <div className='container__wrapper'>
                        <h1 className='container__title'>Сброс пароля</h1>

                        <MolchatInput onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            inputType='text'
                            placeholder='Ваш email' />

                        <MolchatInput onChange={(e) => setNewPassword(e.target.value)}
                            value={newPassword}
                            inputType='password'
                            placeholder='Введите новый пароль' />

                        <MolchatInput onChange={(e) => setNewPasswordRepeat(e.target.value)}
                            value={newPasswordRepeat}
                            inputType='password'
                            placeholder='Повторите пароль' />

                        <MolchatButton onClick={() => {
                            console.log('Сброс пароля');
                        }}>
                            <p>Установить новый пароль</p>
                        </MolchatButton>

                        <Link style={{ display: 'block', color: COLORS.main_text }} to={'/login'}>Войти</Link>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default PasswordResetForm