import {FC} from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";


interface ICArt {
    onHideCart(): void
}

const Cart: FC<ICArt> = ({onHideCart}) => {
    return (
        <Modal onCloseModal={onHideCart}>
            <ul className={classes.cartItems}>

            </ul>
            <div>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes.buttonAlt} onClick={onHideCart}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart