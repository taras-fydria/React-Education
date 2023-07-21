import classes from './CartButton.module.css';
import {FC, MouseEventHandler} from "react";
import useAppDispatch from "../../hooks/useAppDispatch.ts";
import {uiSliceActions} from "../../store";

export const CartButton: FC = () => {
    const dispatch = useAppDispatch()
    const btnClickHandler: MouseEventHandler<HTMLButtonElement> = _ => dispatch(uiSliceActions.toggle())

    return (
        <button onClick={btnClickHandler} className={classes.button}>
            <span>My Cart</span>
            <span className={classes.badge}>1</span>
        </button>
    );
};