import React, {
    forwardRef,
} from "react";
import classes from "./Input.module.css";
import {IInputComponent} from "./input";

const Input = forwardRef<HTMLInputElement, IInputComponent>(({input, label, id}, ref) => {
    return (
        <div className={classes.input}>
            <label htmlFor={input.id}>{label}</label>
            <input {...input} ref={ref}/>
        </div>
    )
})

export default Input