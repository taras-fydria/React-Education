import classes from './Card.module.css';
import {FC, ReactNode} from "react";

export const Card: FC<{className?: string, children: ReactNode}> = (props) => {
    return (
        <section
            className={`${classes.card} ${props.className ? props.className : ''}`}
        >
            {props.children}
        </section>
    );
};