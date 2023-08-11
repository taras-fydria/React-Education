import classes from "./CartItem.module.css";
import { FC, MouseEventHandler } from "react";
import { ICartItemComponent } from "./types.ts";
import { useAppDispatch } from "../../hooks";
import { cartActions } from "../../store/cart";

export const CartItem: FC<ICartItemComponent> = (props) => {
  const { title, quantity, total, price, id } = props.item;
  const dispatch = useAppDispatch();

  const addButtonClickHandler: MouseEventHandler<HTMLButtonElement> = () =>
    dispatch(
      cartActions.addItemToCart({
        price,
        title,
        id,
      })
    );

  const removeBtnClickHandler: MouseEventHandler<HTMLButtonElement> = () =>
    dispatch(cartActions.removeItem(id));

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeBtnClickHandler}>-</button>
          <button onClick={addButtonClickHandler}>+</button>
        </div>
      </div>
    </li>
  );
};
