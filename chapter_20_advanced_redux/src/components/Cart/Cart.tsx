import classes from './Cart.module.css';
import {CartItem} from "./CartItem.tsx";
import {Card} from "../UI";
import {useAppSelector} from "../../hooks";

export const Cart = () => {
    const cartItems = useAppSelector(state => state.cart.items)

    return (
        <Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            {cartItems && (
                <ul>
                    {cartItems.map(({title, price, total, id, quantity}) => (
                        <CartItem
                            key={id}
                            item={{title, price, total, id, quantity}}
                        />
                    ))}
                </ul>
            )}
        </Card>
    );
};