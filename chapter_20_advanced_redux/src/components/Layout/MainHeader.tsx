import classes from './MainHeader.module.css';
import {FC} from "react";
import {CartButton} from "../Cart";

export const MainHeader: FC = () => {
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};