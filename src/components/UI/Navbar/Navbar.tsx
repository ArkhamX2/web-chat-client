import MolchatButton from '../button/MolchatButton'
import {Link} from "react-router-dom";
import { useActions } from '../../../hooks/useActions';
import UserService from '../../../API/services/UserService';

const Navbar = () => {

    const { logout } = useActions()

    return (
        <div>
            <MolchatButton onClick={() => logout()}>
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