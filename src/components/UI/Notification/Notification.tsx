import {FC} from 'react'
import { COLORS } from '../../../constants/styled-components/colors'

interface NotificationProps{
    text: string
}

const Notification :FC<NotificationProps> = ({text = 'Notification'}) => {
  return (
    <div style={{width: 300, height: 50, backgroundColor: COLORS.green, display: 'flex', alignItems: 'center', justifyContent:'center'}}>
        <p style={{fontSize: 16, color: 'white'}}>{text}</p>
    </div>
  )
}

export default Notification