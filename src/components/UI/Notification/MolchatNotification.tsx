import {FC} from 'react'
import { COLORS } from '../../../constants/styled-components/colors'

interface MolchatNotificationProps{
    text: string
}

const MolchatNotification :FC<MolchatNotificationProps> = ({text = 'Notification'}) => {
  return (
    <div style={{width: 300, height: 50, backgroundColor: COLORS.green, display: 'flex', alignItems: 'center', justifyContent:'center', zIndex:'999'}}>
        <p style={{fontSize: 16, color: 'white'}}>{text}</p>
    </div>
  )
}

export default MolchatNotification