import {FormEvent} from "react";
import classes from "./SimpleInput.module.css";
import useInput from "../hooks/use-input.ts";

const SimpleInput = () => {
    const {
        value: enteredName,
        hasError: nameInputHasError,
        inputBluerHandler: nameBluerHandler,
        inputChangeHandler: nameChangedHandler,
        isValid: enteredNameIsValid,
        resetValue: resetNameValue
    } = useInput((value) => typeof value === 'string' && value.trim() !== '')

    const {
        value: emailValue,
        hasError: emailHasError,
        isValid: emailIsValid,
        inputBluerHandler: emailBluerHandler,
        inputChangeHandler: emailChangeHandler,
        resetValue: resetEmail
    } = useInput((value) => typeof value === 'string' && value.trim() !== '' && value.trim().includes('@'))


    let formIsValid: boolean = false

    if (enteredNameIsValid && emailIsValid) {
        formIsValid = true
    }
    const formSubmissionHAndler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!formIsValid) {
            return
        }
        resetNameValue()
        resetEmail()
    }

    const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control'
    const emailInputClasses = emailHasError ? 'form-control invalid' : 'form-control'

    return (
        <form onSubmit={formSubmissionHAndler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input
                    type='text'
                    id='name'
                    onChange={nameChangedHandler}
                    value={enteredName}
                    onBlur={nameBluerHandler}
                />
                {nameInputHasError && (
                    <p className={classes.error}>
                        Name must not be empty
                    </p>
                )}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor='email'>Your Email</label>
                <input
                    type='email'
                    id='email'
                    onChange={emailChangeHandler}
                    value={emailValue}
                    onBlur={emailBluerHandler}
                />
                {emailHasError && (
                    <p className={classes.error}>
                        Name must not be empty and contain '@' symbol
                    </p>
                )}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
