import { FC } from 'react'
import classes from './MolchatButton.module.css'
import { COLORS } from '../../../constants/styled-components/colors';

export enum ButtonType {
  rounded = 'rounded',
  sharp = 'sharp'
}

interface MolchatButtonProps {
  width?: string;
  height?: string;
  color?: string;
  type?: ButtonType;
  onClick: () => void | null;
  children?: JSX.Element;
}

const MolchatButton: FC<MolchatButtonProps> =
  ({
    width = "50",
    height = "25",
    color = COLORS.orange,
    type = ButtonType.rounded,
    children,
    onClick
  }) => {

    return (
      <button
        onClick={() => onClick()}
        className={classes.molchatBtn}
        style={{
          width: width,
          height: height,
          backgroundColor: color,
          color: COLORS.white,
          borderColor: 'transparent',
          borderRadius: type === ButtonType.rounded ? '5px' : '0px'

        }}
      >
        {children}
      </button>
    )
  }

export default MolchatButton