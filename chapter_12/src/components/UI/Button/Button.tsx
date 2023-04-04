import classes from './Button.module.css';
import React, {FC, ReactNode} from "react";

export enum EButton {
    SUBMIT = 'submit',
    RESET = 'reset',
    BUTTON = 'button'
}

interface IButton {
    type: EButton,
    className: string,
    disabled: boolean,
    children?: ReactNode

    onClick(): void,
}

const Button: FC<IButton> = (props) => {
    console.log('button running')
    return (
        <button
            type={props.type || 'button'}
            className={`${classes['button']} ${props.className}`}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
};

export default React.memo(Button);
