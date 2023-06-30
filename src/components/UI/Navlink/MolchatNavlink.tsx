import { FC } from 'react'
import classes from './MolchatNavlink.module.css'
import { Link } from 'react-router-dom'

interface MolchatNavlinkProps {
    destination: string,
    text: string,
}

const MolchatNavlink : FC<MolchatNavlinkProps> = ({
    destination,
    text,
}) => {
  return (
    <div className={classes.molchatNavlinkContainer}>
        <Link className={classes.molchatNavlink} to={destination}>{text}</Link>
    </div>
  )
}

export default MolchatNavlink
