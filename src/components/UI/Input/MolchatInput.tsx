import { FC } from 'react'
import classes from './MolchatInput.module.css'

interface MolchatInputProps {
    onChange: (e:any) => void | null
    value: string,
    placeholder: string,
    inputType: string
}

const MolchatInput: FC<MolchatInputProps> = ({
    placeholder,
    inputType,
    value,
    onChange
}) => {
    return (
        <div className={classes.molchatInputContainer}>
            <input
                className={classes.molchatInput}
                onChange={(e) => onChange(e)}
                value={value}
                type={inputType}
                placeholder={placeholder} />
        </div>
    )
}

export default MolchatInput