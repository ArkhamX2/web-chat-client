import { useTypedSelector } from '../hooks/useTypedSelector'
import MolchatLoader from './UI/Loader/MolchatLoader'

const ProfileCard = () => {
    const { username, isUserLoading, userError } = useTypedSelector(state => state.user)

    if (userError) {
        return (
            <p>{userError}</p>
        )
    }

    if (isUserLoading) {
        return (
            <MolchatLoader />
        )
    }


        //Сделать модальное окно с изменением имени пользователя, которое появляется при нажатии на имя пользователя
    return (
        <div>
            <img src="user-profile-picture" alt="" />
            <div>
                <p>Имя</p>
                <p>{username}</p>
            </div>
        </div>
    )
}

export default ProfileCard