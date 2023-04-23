import classes from './Card.module.css';
import {FC, ReactNode} from "react";

const Card: FC<{ children: ReactNode }> = (props) => {
    return <div className={classes.card}>{props.children}</div>;
};

export default Card;
