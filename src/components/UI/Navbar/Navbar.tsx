import MolchatButton from '../button/MolchatButton'
import { Link } from "react-router-dom";
import { useActions } from '../../../hooks/useActions';
import UserService from '../../../API/services/UserService';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import MolchatNotification from '../Notification/MolchatNotification';

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
                <Link style={{marginLeft:10}} to="/profile">Профиль пользователя</Link>
                <Link style={{marginLeft:10}} to="/rooms">Чаты</Link>
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