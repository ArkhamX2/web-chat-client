import MolchatButton from '../button/MolchatButton'
import { useActions } from '../../../hooks/useActions';
import UserService from '../../../API/services/UserService';
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

    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            {text
                ? <MolchatNotification text={text} />
                : <p></p>
            }

            <div style={{display:'flex', flexDirection:"row"}}>
                <MolchatNavlink destination='/rooms' text='Чаты'/>
                <MolchatNavlink destination='/profile' text='Профиль'/>
                <MolchatNavlink destination='/chat-room' text='1Чат'/>
            </div>

            <button style={{display:"none"}}
                onClick={() => {
                    const response = UserService.fetchUsers();
                    console.log(response);
                }}
            >GET USERS TEST BUTTON</button>


            <MolchatButton onClick={() => {
                logout()
                setMessage('Выход прошел успешно')
                setTimeout(() => clearMessage(), 2000)
            }}>
                <p>Выйти</p>
            </MolchatButton>
        </div>
    )
}

export default Navbar