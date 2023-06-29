import MolchatButton from '../button/MolchatButton'
import { Link } from "react-router-dom";
import { useActions } from '../../../hooks/useActions';
import UserService from '../../../API/services/UserService';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import Notification from '../Notification/Notification';

const Navbar = () => {

    const { logout, setMessage,clearMessage } = useActions()
    const {text} = useTypedSelector(state => state.message)

    return (
        <div>
            {text
            ?<Notification text={text}/>
            :<p></p>
            }
            <MolchatButton onClick={() => {
                logout()
                setMessage('Выход прошел успешно')
                setTimeout(()=>clearMessage(),2000)
            }}>
                <p>Выйти</p>
            </MolchatButton>
            <div>
                <Link to="/profile">Профиль пользователя</Link>
                <Link to="/rooms">Чаты</Link>
            </div>
            <button
                onClick={() => {
                    const response = UserService.fetchUsers();
                    console.log(response);
                }}
            >GET USERS</button>
        </div>
    )
}

export default Navbar