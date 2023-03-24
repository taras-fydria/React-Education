import {FC, useContext} from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
import {ICartContext} from "../../store/types";

interface IHeaderCartButton {
    onClick(): void
}

const HeaderCartButton: FC<IHeaderCartButton> = ({onClick}) => {
    const cartCtx = useContext<ICartContext>(CartContext)
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0,)

    return (
        <button className={classes.button} onClick={onClick}>
          <span>
              <CartIcon/>
          </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>
    )
}

export default HeaderCartButton