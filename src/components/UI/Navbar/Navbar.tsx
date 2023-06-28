import MolchatButton from '../button/MolchatButton'
import {Link} from "react-router-dom";
import { useActions } from '../../../hooks/useActions';

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
        </div>
    )
}

export default Navbar