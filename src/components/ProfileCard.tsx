import { COLORS } from '../constants/styled-components/colors'
import { useTypedSelector } from '../hooks/useTypedSelector'
import MolchatForm from './UI/Form/MolchatForm'
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
        <MolchatForm>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center' }}>
                <div style={{
                    display: 'flex', height: '200px', width: '200px', backgroundColor: COLORS.white_40, borderRadius: '50%', alignSelf: 'center',
                    overflow: 'hidden', border:'3px solid gray'
                }}>
                    <img src="src/images/Светлая память.jpg" alt="Аватар - легенда бо Аанге" />
                </div>
                <span style={{
                    backgroundColor: COLORS.white_5, alignItems: 'center', textAlign: 'center', marginTop: '10px', padding: '5px'
                    , justifyContent: 'space-between', border: '3px solid gray', borderRadius:'8px'
                }}>
                   <p style={{ margin: '5px' }}>Имя: {username}</p>
                </span>
                

            </div>
            <img src="user-profile-picture" alt="" />

        </MolchatForm>

    )
}

export default ProfileCard