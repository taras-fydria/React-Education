import classes from './CartButton.module.css';
import {FC, MouseEventHandler} from "react";
import {uiSliceActions} from "../../store";
import {useAppDispatch, useAppSelector} from "../../hooks";

export const CartButton: FC = () => {
    const dispatch = useAppDispatch()
    const cartTotalQuantity = useAppSelector(state => state.cart.totalQuantity)
    const btnClickHandler: MouseEventHandler<HTMLButtonElement> = _ => dispatch(uiSliceActions.toggle())

    return (
        <button onClick={btnClickHandler} className={classes.button}>
            <span>My Cart</span>
            <span className={classes.badge}>{cartTotalQuantity}</span>
        </button>
    );
};