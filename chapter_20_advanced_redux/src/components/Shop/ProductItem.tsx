import classes from "./ProductItem.module.css";
import { FC, MouseEventHandler } from "react";
import { IProduct } from "./types.ts";
import { Card } from "../UI";
import { useAppDispatch } from "../../hooks";
import { cartActions } from "../../store/cart";

export const ProductItem: FC<IProduct> = (props) => {
  const { title, price, description, id } = props;

  const dispatch = useAppDispatch();

  const addToCartHandler: MouseEventHandler<HTMLButtonElement> = () =>
    dispatch(
      cartActions.addItemToCart({
        price,
        id,
        title,
      })
    );

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};
