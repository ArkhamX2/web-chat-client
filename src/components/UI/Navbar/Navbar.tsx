import MolchatButton from '../button/MolchatButton'
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import MolchatNotification from '../Notification/MolchatNotification';
import MolchatNavlink from '../Navlink/MolchatNavlink';

const Navbar = () => {

    const { logout, setMessage, clearMessage } = useActions()
    const { isLoggedIn } = useTypedSelector(state => state.auth)

    const { text } = useTypedSelector(state => state.message)

    if (!isLoggedIn) {
        return (
            <p></p>
        )
    }
    /*дивы для каждого элемента это враперы, которые будут подсвечиваться*/
    return (
        <div style={{ display: 'flex', flexDirection: 'row', backgroundColor:'white'}}>

            {text
                ? <MolchatNotification text={text} />
                : <p></p>
            }
            
            <div style={{ display: 'flex', flexDirection: "row" }}>
                <div style={{alignSelf:'flex-end'}}>
                    <MolchatNavlink destination='/rooms' text='Чаты '>
                        <img src='src/images/chatIcon.png' width='60%' style={{ marginTop: 5 }} alt='Chat' />
                    </MolchatNavlink>
                </div>
                <div style={{alignSelf:'flex-end'}}> 
                    <MolchatNavlink destination='/profile' text='Профиль'>
                    <img src='src/images/profileIcon.png' width='60%' style={{ marginTop: 5 }} alt='Profile' />
                </MolchatNavlink>
                </div>
                <div style={{alignSelf:'flex-end'}}>
                    <MolchatNavlink destination='/chat-room' text='1Чат' />
                </div>
            </div>

            <div style={{alignSelf:'flex-start'}}>
                <MolchatButton onClick={() => {
                    logout()
                    setMessage('Выход прошел успешно')
                    setTimeout(() => clearMessage(), 2000)
                }}>
                    <p>Выйти</p>
                </MolchatButton>
            </div>

        </div>
    )
}

export default Navbar