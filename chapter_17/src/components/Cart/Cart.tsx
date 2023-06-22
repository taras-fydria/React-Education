import {FC, MouseEventHandler, useContext, useState} from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import {ICart, ICartContext, ICartItem, IOrder} from "../../types";
import {CartContext} from "../../store";

const Cart: FC<ICart> = ({onHideCart}) => {
    const cartCtx = useContext<ICartContext>(CartContext)
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const cartHasItems = cartCtx.items && cartCtx.items.length
    const [showCheckout, setShowCheckout] = useState<boolean>(false)
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const [didSubmit, setDidSubmit] = useState<boolean>(false)

    const carItemRemoveHandler = (id: string) => {
        cartCtx.removeItem(id)
    }

    const cartItemAddHandler = (item: ICartItem) => {
        cartCtx.addItem(item)
    }

    const orderClickHandler: MouseEventHandler<HTMLButtonElement> = () => setShowCheckout(!showCheckout)

    const submitOrderHandler = async (order: IOrder) => {
        setIsSubmitting(true)
        try {
            const response = await fetch('https://education-meals-default-rtdb.europe-west1.firebasedatabase.app/orders.json', {
                method: 'POST',
                body: JSON.stringify({
                    user: order,
                    orderedItems: cartCtx.items
                })
            })
            if (!response.ok || response.status !== 200) throw new Error(response.statusText)
            setDidSubmit(true)
        } catch (e) {

        } finally {
            setIsSubmitting(false)
            cartCtx.clearItems()
        }
    }

    const cartModuleContent = (
        <>
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
            {showCheckout && <Checkout onSubmit={submitOrderHandler} onCancel={onHideCart}/>}
            <div className={classes.actions}>
                <button className={classes.buttonAlt} onClick={onHideCart}>Close</button>
                {cartHasItems && !showCheckout ? (
                    <button className={classes.button}
                            onClick={orderClickHandler}>{showCheckout ? 'Continue' : 'Order'}</button>
                ) : ''}
            </div>
        </>
    )

    const sendingOrderData = <p>Sending order data...</p>

    const didSubmittingModalContent = (
        <>
            <p>Successfully sent the order!</p>
            <div className={classes.actions}>
                <button className={classes.button} onClick={onHideCart}>
                    {'Close'}
                </button>
            </div>
        </>)

    return (
        <Modal onCloseModal={onHideCart}>
            {!isSubmitting && !didSubmit && cartModuleContent}
            {isSubmitting && sendingOrderData}
            {!isSubmitting && didSubmit && didSubmittingModalContent}
        </Modal>
    )
}

export default Cart