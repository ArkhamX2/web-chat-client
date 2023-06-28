import {FC} from 'react'
import classes from './MolchatButton.module.css'

interface MolchatButtonProps{
  onClick: () => void | null;
  children?: JSX.Element;
}

const MolchatButton: FC<MolchatButtonProps> = ({children, onClick}) => {
  return (
    <button onClick={() => onClick()} className={classes.molchatBtn}>
      {children}
    </button>
  )
}

export default MolchatButton