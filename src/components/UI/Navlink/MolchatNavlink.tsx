import { FC } from 'react'
import classes from './MolchatNavlink.module.css'
import { Link } from 'react-router-dom'

interface MolchatNavlinkProps {
  children?: JSX.Element;
  destination: string,
  text: string,
}

const MolchatNavlink: FC<MolchatNavlinkProps> = ({
  children,
  destination,
  text,
}) => {
  return (
    <div className={classes.molchatNavlinkContainer} >
      <Link className={classes.molchatNavlink} to={destination} style={{display: 'flex', alignItems: 'center', justifyContent:'center', flexDirection:'column'}}>  {children} {text}</Link>
      


    </div>
  )
}

export default MolchatNavlink

