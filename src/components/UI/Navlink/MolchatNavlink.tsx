import { FC } from 'react'
import classes from './MolchatNavlink.module.css'
import { Link } from 'react-router-dom'

interface MolchatNavlinkProps {
    children?: JSX.Element[];
    destination: string,
    text: string,
}

const MolchatNavlink : FC<MolchatNavlinkProps> = ({
    children,
    destination,
    text,
}) => {
  return (
    <div className={classes.molchatNavlinkContainer}>
        <Link className={classes.molchatNavlink} to={destination}>{text}</Link>
        {children}
    </div>
  )
}

export default MolchatNavlink

