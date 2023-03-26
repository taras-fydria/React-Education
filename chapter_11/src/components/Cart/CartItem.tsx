import {FC} from "react";
import {ICartItem} from "../../store/types";
import classes from './CartItem.module.css';

interface CartItemComponent extends ICartItem {
    onRemove(id: string): void,

    onAdd(item: ICartItem): void
}

const CartItem: FC<CartItemComponent> = ({name, id, price, amount, description, onAdd, onRemove}) => {
    const outputPrice: string = `$${price.toFixed(2)}`;

    return (
        <li className={classes['cart-item']}>
            <div>
                <h2>{name}</h2>
                <div className={classes.summary}>
                    <span className={classes.price}>{outputPrice}</span>
                    <span className={classes.amount}>x {amount}</span>
                </div>
            </div>
            <div className={classes.actions}>
                <button onClick={() => onRemove(id)}>−</button>
                <button onClick={() => onAdd({id, price, amount: 1, description, name})}>+</button>
            </div>
        </li>
    );
}

export default CartItem