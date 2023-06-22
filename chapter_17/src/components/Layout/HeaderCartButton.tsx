import {FC, useContext, useEffect, useState} from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import {ICartContext, IHeaderCartButton} from "../../types";
import {CartContext} from "../../store/cart";

const HeaderCartButton: FC<IHeaderCartButton> = ({onClick}) => {
    const [buttonIsHighlighted, setButtonIsHighlighted] = useState<boolean>(false)
    const cartCtx = useContext<ICartContext>(CartContext)
    const {items} = cartCtx

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0,)
    const btnClasses: string = `${classes.button} ${buttonIsHighlighted ? classes.bump : ''}`

    useEffect(() => {
        if (items.length === 0) {
            return
        }
        setButtonIsHighlighted(true)
        const timer = setTimeout(() => setButtonIsHighlighted(false), 300)
        return () => clearTimeout(timer);
    }, [items])

    return (
        <button className={btnClasses} onClick={onClick}>
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