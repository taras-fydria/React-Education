import {FC, useContext} from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import {ICartContext, ICartItem} from "../../store/types";
import CartItem from "./CartItem";


interface ICArt {
    onHideCart(): void
}

const Cart: FC<ICArt> = ({onHideCart}) => {
    const cartCtx = useContext<ICartContext>(CartContext)
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const cartHasItems = cartCtx.items && cartCtx.items.length

    const carItemRemoveHandler = (id: string) => {
        cartCtx.removeItem(id)
    }

    const cartItemAddHandler = (item: ICartItem) => {
        cartCtx.addItem(item)
    }

    return (
        <Modal onCloseModal={onHideCart}>
            {cartHasItems > 0 ? (
                <ul className={classes['cart-items']}>
                    {cartCtx.items.map((cartItem, index) => (
                        <CartItem
                            key={index}
                            amount={cartItem.amount}
                            id={cartItem.id}
                            name={cartItem.name}
                            description={cartItem.description}
                            price={cartItem.price}
                            onAdd={cartItemAddHandler}
                            onRemove={carItemRemoveHandler}
                        />
                    ))}
                </ul>
            ) : ''}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes.buttonAlt} onClick={onHideCart}>Close</button>
                {cartHasItems ? (
                    <button className={classes.button}>Order</button>
                ) : ''}
            </div>
        </Modal>
    )
}

export default Cart