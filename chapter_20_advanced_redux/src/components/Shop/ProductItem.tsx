import classes from './ProductItem.module.css';
import {FC} from "react";
import {IProduct} from "./types.ts";
import {Card} from "../UI";

export const ProductItem: FC<IProduct> = (props) => {
  const { title, price, description } = props;

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};
