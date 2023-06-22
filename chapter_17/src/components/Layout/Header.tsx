import React, {FC} from "react";
import mealsImage from '../../assets/meals.jpg'
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import {header} from "../../types";

const Header: FC<header> = ({onShowCart}) => {
    return (
        <>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={onShowCart}/>
            </header>
            <div className={classes.mainImage}>
                <img src={mealsImage} alt="A table full of delicious food!"/>
            </div>
        </>
    )
}

export default Header