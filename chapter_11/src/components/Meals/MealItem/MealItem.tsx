import {FC, useContext} from "react";
import {IMeal} from "../meals-types";
import MealItemForm from "./MealItemForm";
import classes from './MealItem.module.css'
import CartContext from "../../../store/cart-context";

const MealItem: FC<IMeal> = (props) => {
    const cartCtx = useContext(CartContext)
    const price = `$${props.price}`
    const addToCartHandler = (amount: number): void => {
        cartCtx.addItem({
            ...props,
            amount: amount
        })
    }
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm onAddToCArt={addToCartHandler}/>
            </div>
        </li>
    )
}

export default MealItem