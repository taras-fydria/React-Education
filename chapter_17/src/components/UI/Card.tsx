import {FC, ReactNode} from "react";
import classes from './Card.module.css'

const Card: FC<{ children: ReactNode }> = props => {
    return (
        <div className={classes.card}>
            {props.children}
        </div>
    )
}

export default Card