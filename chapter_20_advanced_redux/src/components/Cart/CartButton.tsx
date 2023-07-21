import classes from './CartButton.module.css';
import {FC} from "react";

export const CartButton: FC = () => {
  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};