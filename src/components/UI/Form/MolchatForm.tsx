import { FC } from 'react'
import classes from './MolchatForm.module.css'

interface MolchatFormProps{
    children?: JSX.Element[];
}

const MolchatForm: FC<MolchatFormProps> = ({children}) => {
    return (
        <main className={classes.appContainer}>
            <section className={classes.page}>
                <div className={classes.container}>
                    <div className={classes.containerWrapper}>
                        {children}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default MolchatForm