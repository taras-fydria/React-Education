import React, {FC, ForwardedRef, LegacyRef, Ref} from "react";
import classes from "./Input.module.css";
import {IInput, IInputComponent} from "./input";

const Input: ForwardedRef<IInputComponent> = React.forwardRef(({input, label, id}, ref) => {
    return (
        <div className={classes.input}>
            <label htmlFor={input.id}>{label}</label>
            <input {...input} ref={ref}/>
        </div>
    )
})

export default Input